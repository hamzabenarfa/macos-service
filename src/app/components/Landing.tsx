"use client"

import Button from "./Button/Button";

export default function Landing() {


  return (
    <section className="bg-gray-800 bg-[url('/hero2.jpg')] bg-cover bg-center text-white text-center py-40 relative">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
        <h1 className=" text-2xl md:text-5xl lg:text-6xl xl:text-5xl font-semibold tracking-wide bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Vous rencontrez des difficultés avec votre Mac ?
        </h1>
        <h1 className=" text-2xl md:text-5xl lg:text-6xl xl:text-5xl font-semibold tracking-wide text-white">
          Vous rencontrez des difficultés avec votre Mac ?
        </h1>
        <p className="text-xl font-semibold md:text-3xl">
          Obtenez rapidement l&apos;assistance dont vous avez besoin, sans vous déplacer en magasin.
        </p>
        <div>
          <Button title="09 80 80 36 43" />
          <small className="block mt-2">Appel gratuit non surtaxé</small>
        </div>
      </div>

    </section>

    // <section className="mx-auto   flex max-w-[1350px] items-center justify-center px-2 pt-4 mb-16 ">
    //   <div className="space-y-8 text-center">
    //     <h1 className="space-y-2 text-2xl md:text-5xl font-semibold tracking-wide lg:text-6xl xl:text-5xl">
    //       <span className=" block  bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
    //       Vous rencontrez des difficultés avec votre Mac ?
    //       </span>
    //       <img src="/macpro.png" alt="mac" className=" w-full"/>

    //       <span className="block text-xl font-semibold md:text-3xl">Obtenez rapidement l&apos;assistance dont vous avez besoin, sans vous déplacer en magasin.</span>

    //     </h1>
    //     <div>
    //       <Button title="09 80 80 36 43" />
    //       <small>Appel gratuit non surtaxé</small>
    //     </div>

    //   </div>
    // </section>
  );
}
