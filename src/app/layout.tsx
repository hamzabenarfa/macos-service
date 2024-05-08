import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FixedBar from "./components/FixedBar";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {  
  title: "mactec-service",
  description: "Bienvenue sur mactec-service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <FixedBar />
        <Footer />
        <CookieConsent />

      </body>
    </html>
  );
}
