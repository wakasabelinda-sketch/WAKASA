import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, phone, mpesa_receipt_code, article_requested } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !mpesa_receipt_code || !article_requested) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert into payments table
    const { data: payment, error: dbError } = await supabase
      .from('payments')
      .insert({
        name,
        email,
        phone_number: phone,
        mpesa_receipt_number: mpesa_receipt_code,
        article_requested,
        article_id: 0, // Placeholder since we're using article_requested text
        amount: 10,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save request' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send email notification to Kezzy
    const emailBody = `
New Article Access Request

Customer Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- M-PESA Receipt Code: ${mpesa_receipt_code}
- Article Requested: ${article_requested}

Request ID: ${payment.id}
Status: Pending Verification

Please verify the M-PESA payment and send the full article to the customer's email address.
    `.trim();

    try {
      // Using a simple email service (you can replace this with your preferred email service)
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'House of Kezzy <noreply@houseofkezzy.com>',
          to: 'Houseofkezzymediators@gmail.com',
          subject: `New Article Request: ${article_requested}`,
          text: emailBody,
        }),
      });

      if (!emailResponse.ok) {
        console.error('Email sending failed:', await emailResponse.text());
      }
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Request submitted successfully',
        requestId: payment.id 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});