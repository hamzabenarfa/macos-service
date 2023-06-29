"use client";
import Image from "next/image";
import Button from "@/app/components/Button/Button";

export default function page() {
  return (
    <>
      {/* <section className="min-h-screen bg-[#FBFBFB] relative">
     
      </section> */}

      <section className="min-h-screen bg-[#FBFBFB] ">
      <Image
          src="/imac.jpg"
          alt="imac"
          width={2880}
          height={1548}
          className=""
        />
        <div className="flex flex-col items-center">
          <span className="block text-8xl pt-20 font-medium bg-gradient-to-r from-yellow-400 to-purple-600 text-transparent bg-clip-text">
            iMac
          </span>
          <span className="block text-lg md:text-3xl font-bold px-5 md:px-80 py-8 text-center  bg-gradient-to-r from-yellow-600 to-purple-600 text-transparent bg-clip-text">
            Services de dépannage iMac hors pair pour tous les
            modèles Mac, y compris tailles 21,5&quot;, 24&quot; et 27&quot;. Résolution
            problèmes démarrage, connectivité réseau, arrêts aléatoires, écran
            gris, carte logique, AirPort et démarrage écran dossier.
          </span>
          <Button title="Appler maintenant" />
        </div>
      </section>
    </>
  );
}
