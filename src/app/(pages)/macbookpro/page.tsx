"use client"

import Button from "@/app/components/Button/Button";
export default function page() {
  return (
    <>
      <section className="min-h-screen bg-[#000] relative">
        <img
          src="/macbookpro.jpg"
          alt="macbookpro"
          
        
        />
      </section>
      <section className="min-h-screen bg-[#000] relative">
        <div className="flex flex-col items-center ">
          {/* <span className="block text-7xl font-bold text-white px-5">
            Mover. Maker.
          </span>
          <span className="block  text-7xl font-bold text-white px-5">
            Boundary breaker.
          </span> */}

          <p className="block text-sm px-5 md:text-2xl font-bold md:px-96 md:text-center py-8  bg-gradient-to-r from-stone-500 to-zinc-500 text-transparent bg-clip-text">
            Nous offrons un service de dépannage, réparation, récupération et
            mise à niveau de haute qualité pour tous les modèles MacBook Pro, y
            compris les tailles 13, 15, 16 et 17 pouces. Que votre MacBook Pro
            présente des problèmes de carte logique, de batterie ou simplement
            besoin d&quot;une mise à niveau, notre équipe spécialisée dans la
            réparation des produits Apple est là pour vous aider. Contactez-nous
            dès aujourd&apos;hui pour un service rapide et fiable sur tous les
            modèles Apple MacBook Pro, y compris les générations 1, 2 (Unibody),
            3 (Retina), 4 (Touch Bar), M1 et M2.
          </p>
          <Button title="Appler maintenant" />
        </div>
      </section>
    </>
  );
}
