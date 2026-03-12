export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-teal-50 text-sm leading-relaxed">
              House of Kezzy Mediators provides professional mediation and legal services to help resolve disputes efficiently and amicably.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-teal-50 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/articles" className="text-teal-50 hover:text-white transition-colors text-sm">
                  Articles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-teal-50">
              <li className="flex items-start gap-2">
                <i className="ri-mail-line mt-0.5"></i>
                <a href="mailto:Houseofkezzymediators@gmail.com" className="hover:text-white transition-colors">
                  Houseofkezzymediators@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-phone-line mt-0.5"></i>
                <a href="tel:+254742117047" className="hover:text-white transition-colors">
                  0742117047
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-whatsapp-line mt-0.5"></i>
                <a href="https://wa.me/254742117047" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Founder Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Founder</h3>
            <p className="text-teal-50 text-sm leading-relaxed">
              <strong className="text-white">Kezzy Ray Oluoch</strong>
              <br />
              Certified Mediator & Lawyer
              <br />
              Mediating for Tomorrow.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-500 mt-8 pt-8 text-center text-sm text-teal-50">
          <p>&copy; {new Date().getFullYear()} House of Kezzy Mediators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
