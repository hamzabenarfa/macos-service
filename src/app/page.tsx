"use client";
import Landing from "./components/Landing";
import Service from "./components/Service";
import Support from "./components/Support";
import Entreprise from "./components/Entreprise";
export default function Home() {
  return (
    <>
      <main className="  bg-[#FBFBFB] ">
       
        <Landing />
        <Support />
        <Service />
        <Entreprise />
      </main>
    </>
  );
}
