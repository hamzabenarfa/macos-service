"use client";
import Landing from "./components/Landing";
import Service from "./components/Service";
import Support from "./components/Support";
import Entreprise from "./components/Entreprise";
export default function Home() {
  return (
    <>
      <main className=" relative bg-[#FBFBFB] ">
        <div className="fixed  left-0 right-0 bottom-0 backdrop-blur-md bg-white/30 md:hidden">
          <p className="text-xl text-center capitalize font-bold ">
          <a href="tel:0980806764" className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Appelez nous au 09 80 80 67 64
          </a>
          </p>
        </div>
        <Landing />
        <Support />
        <Service />
        <Entreprise />
      </main>
    </>
  );
}
