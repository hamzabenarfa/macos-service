"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FixedBar from "./components/FixedBar";
import CookieConsent from "./components/CookieConsent";
import { useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mactec-support",
  description: "Bienvenue sur mactec-support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      enableGTM();
    }
  }, []);

  const enableGTM = () => {
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
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQNH8C7S" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <Navbar />
        {children}
        <FixedBar />
        <Footer />
        <CookieConsent />

      </body>
    </html>
  );
}
