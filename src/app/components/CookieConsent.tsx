"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isGTMEnabled, setIsGTMEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'true' && consent !== 'false') {
      setShowBanner(true);
    }
    if (consent === 'true') {
      enableGTM();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    enableGTM();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  const enableGTM = () => {
    setIsGTMEnabled(true);
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MQNH8C7S');
    `;
    document.head.appendChild(script);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 p-4 bg-white shadow-md text-gray-800 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <p className="text-sm text-center">
          Nous utilisons nos propres cookies et ceux de tiers pour personnaliser le contenu et analyser le trafic web.
          <br />
          <Link href="/RGPD" className="text-blue-600 hover:underline">
            En savoir plus sur les cookies
          </Link>
        </p>
        <div className="mt-3 flex justify-center gap-1">
          <button onClick={handleAccept} className="text-sm py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700">
            Accepter
          </button>
          <button onClick={handleReject} className="text-sm py-2 px-4 rounded-lg text-gray-800 bg-gray-300 hover:bg-gray-400 mr-2">
            Rejeter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
