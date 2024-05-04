"use client";
import Landing from "./components/Landing";
import Tarif from "./components/Tarif";
import Entreprise from "./components/Entreprise";
import Shop from "./components/shop";
export default function Home() {
  return (
    <>
      <main className="bg-[#FBFBFB] ">
        <Landing />
        <Tarif />
        
      
        {/* <Shop /> */}
        <Entreprise />
      </main>
    </>
  );
}
