"use client";
import Landing from "./components/Landing";
import Service from "./components/Service";
import Support from "./components/Support";
import Entreprise from "./components/Entreprise";
import Shop from "./components/shop";
export default function Home() {
  return (
    <>
      <main className="  bg-[#FBFBFB] ">
       
        <Landing />
        <Support />
        <Shop />
        {/* <Service /> */}
        <Entreprise />
      </main>
    </>
  );
}
