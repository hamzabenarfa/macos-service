"use client"

import Button from "./Button/Button";

export default function Landing() {


  return (
    <section className="flex  bg-[#f7f7f7] bg-[url('/macc.jpeg')] bg-cover bg-center text-white text-center py-40 relative">
      <div className="relative pl-8 md:pl-16 z-10 flex flex-col items-start justify-start gap-4 ">
        <h1 className=" text-2xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-black">
        Un Problème Sur votre Mac ?

        </h1>
       
        <div className="flex flex-col ">
          <h1 className="text-black text-left">On peux vous aider rapidement avec la plupart des problèmes  </h1>
          <h1 className="text-black text-left"> d&apos;ordinateurs Mac à distance!</h1>
        </div>

        <div>

          <Button title="09 70 70 82 21" />
          <small className="block mt-2 text-black">Appel gratuit non surtaxé</small>
        </div>
      </div>

    </section>
  );
}
