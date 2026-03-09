import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useState } from "react";

function App() {
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [showCallTooltip, setShowCallTooltip] = useState(false);

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <AppRoutes />
        
        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          {/* Call Button */}
          <div className="relative">
            {showCallTooltip && (
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                Call Kezzy
              </div>
            )}
            <a
              href="tel:0742117047"
              onMouseEnter={() => setShowCallTooltip(true)}
              onMouseLeave={() => setShowCallTooltip(false)}
              className="flex items-center justify-center w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              aria-label="Call Kezzy"
            >
              <i className="ri-phone-fill text-2xl"></i>
            </a>
          </div>

          {/* WhatsApp Button */}
          <div className="relative">
            {showWhatsAppTooltip && (
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                Chat on WhatsApp
              </div>
            )}
            <a
              href="https://wa.me/254742117047"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setShowWhatsAppTooltip(true)}
              onMouseLeave={() => setShowWhatsAppTooltip(false)}
              className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-pulse"
              aria-label="Chat on WhatsApp"
            >
              <i className="ri-whatsapp-fill text-2xl"></i>
            </a>
          </div>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;