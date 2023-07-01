"use client";
import Landing from "./components/Landing";
import Service from "./components/Service";
import Support from "./components/Support";
import Entreprise from "./components/Entreprise";
import FixedBar from "./components/FixedBar";
export default function Home() {
  return (
    <>
      <main className=" relative bg-[#FBFBFB] ">
        <FixedBar />
        <Landing />
        <Support />
        <Service />
        <Entreprise />
      </main>
    </>
  );
}
