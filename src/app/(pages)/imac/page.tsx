"use client";

import Button from "@/app/components/Button/Button";

export default function page() {
  return (
    <>
      <section className="m-4 space-y-8  bg-[#FBFBFB] ">
        <img
          src="/imac.jpg"
          alt="imac"
          width={2880}
          height={1548}
          className=""
        />
        <div className="flex flex-col items-center space-y-6 p-4">
          <span className=" bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-justify text-xl font-semibold text-transparent">
            Services de dépannage iMac hors pair pour tous les modèles Mac, y
            compris tailles 21,5&quot;, 24&quot; et 27&quot;. Résolution
            problèmes démarrage, connectivité réseau, arrêts aléatoires, écran
            gris, carte logique, AirPort et démarrage.
          </span>
          <Button title="Appler maintenant" />
        </div>
      </section>
    </>
  );
}
