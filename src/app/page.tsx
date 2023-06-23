"use client";
import Landing from "./components/Landing";
import Service from "./components/Service";
import Support from "./components/Support";
import Contactmail from "./components/Contactmail";
export default function Home() {
  return (
    <div>
      <main className=" bg-[#FBFBFB] ">
        <Landing />

        <Support />

        <Service />

        <Contactmail />

       
      </main>
    </div>
  );
}
