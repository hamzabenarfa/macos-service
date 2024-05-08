"use client";
import Landing from "./components/Landing";
import Tarif from "./components/Tarif";
import Entreprise from "./components/Entreprise";
import CookieConsent from "./components/CookieConsent";
export default function Home() {
  return (
    <>
      <main className="bg-[#FBFBFB] ">
        <Landing />
        <Tarif />
        <Entreprise />
        <CookieConsent />
      </main>
    </>
  );
}
