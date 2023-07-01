"use client";

import Button from "@/app/components/Button/Button";
export default function page() {
  return (
    <>
      <section className="min-h-screen h-full bg-[#000]">
        <img src="/macbookpro.jpg" alt="macbookpro" />
        <div className="flex flex-col items-center justify-center">
          <p className=" bg-gradient-to-r from-stone-500 to-zinc-500 bg-clip-text px-5 py-8 text-sm font-bold text-transparent md:text-center md:text-2xl">
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
