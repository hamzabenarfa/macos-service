"use client"

import Button from "./Button/Button";

export default function Landing() {


  return (
    <section className="flex  bg-gray-800 bg-[url('/bg.gif')] bg-cover bg-center text-white text-center py-40 relative">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative pl-8 z-10 flex flex-col items-start justify-start gap-4 ">
        <h1 className=" text-2xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-black">
          Support informatique
        </h1>
        <h1 className=" text-2xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-black">
          à distance.
        </h1>
        <div className="flex flex-col items-start">
          <h1 className="text-black">On peux vous aider rapidement avec la plupart des problèmes  </h1>
          <h1 className="text-black"> d&apos;ordinateurs Mac à distance!</h1>
        </div>

        <div>

          <Button title="09 80 80 36 43" />
          <small className="block mt-2 text-black">Appel gratuit non surtaxé</small>
        </div>
      </div>

    </section>
  );
}
