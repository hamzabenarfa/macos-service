"use client";

import Button from "@/app/components/Button/Button";
export default function page() {
  return (
    <>
      <section className="hidden md:m-5 md:mx-16 md:grid  md:min-h-screen md:grid-cols-2 md:place-items-center md:rounded-2xl md:bg-[#FBFBFB]">
        <div className="flex flex-col items-center justify-center px-10">
          <h1 className="  text-color-[#1D1D1F] text-8xl capitalize">
            macbook Air
          </h1>
          <p className="text-color-[#767677]  md:text-sm">
            Nous offrons un service de dépannage, réparation, récupération et
            mise à niveau de haute qualité pour tous les modèles MacBook Pro, y
            compris les tailles 13, 15, 16 et 17 pouces. Que votre MacBook Pro
            présente des problèmes de carte logique, de batterie ou simplement
            besoin d&apos;une mise à niveau, notre équipe spécialisée dans la
            réparation des produits Apple est là pour vous aider. Contactez-nous
            dès aujourd&apos;hui pour un service rapide et fiable sur tous les
            modèles Apple MacBook Pro, y compris les générations 1, 2 (Unibody),
            3 (Retina), 4 (Touch Bar), M1 et M2.
          </p>
          <div className="pt-10">
          <Button title="09 80 80 67 64" />
          </div>
        </div>
        <div>
          <img
            src="/macbook_air_large.jpg"
            width={738}
            height={622}
            alt="mac"
          />
        </div>
      </section>

      {/* <section className="grid-rows-2 m-5 grid  min-h-screen place-items-center rounded-2xl bg-[#FBFBFB] md:hidden ">
        <div className="flex flex-col items-center justify-center px-5 md:px-10">
          <h1 className="text-center text-6xl text-color-[#1D1D1F]  capitalize">
            macbook pro
          </h1>
          <div className="pt-20">
          <Button title="09 80 80 67 64" />
          </div>
        </div>
        <div>
        <img
            src="/macbook_air_large.jpg"
            width={738}
            height={622}
            alt="mac"
          />
        </div>
      </section> */}

      {/* <section className="grid-rows-2 m-5 grid  h-full w-full p-24 place-items-center rounded-2xl bg-[#000000] md:mx-16">
        <div className="flex flex-col items-center justify-center px-5 md:px-10">
          <h1 className="text-center text-6xl capitalize text-white md:mt-3 md:text-8xl">
            macbook pro
          </h1>
        </div>
        <div>
          <img
            src="/macbook_air_m1_large.jpg"
            width={1380}
            height={486}
            alt="mac"
          />
        </div>
      </section> */}
    </>
  );
}
