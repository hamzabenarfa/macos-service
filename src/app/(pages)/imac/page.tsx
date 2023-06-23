import Image from "next/image";
import Button from "@/app/components/Button/Button";

export default function page() {
  return (
    <div>
      <section className="min-h-screen bg-[#FBFBFB] relative">
        <Image
          src="/imac.jpg"
          alt="imac"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </section>

      <section className="min-h-screen bg-[#FBFBFB] relative">
        <div className="flex flex-col items-center">
          <span className="block text-8xl pt-20 font-medium bg-gradient-to-r from-yellow-400 to-purple-600 text-transparent bg-clip-text">
            iMac
          </span>
          <span className="block text-3xl  px-80 py-8 text-center font-normal bg-gradient-to-r from-yellow-200 to-purple-400 text-transparent bg-clip-text">
            Services de dépannage iMac hors pair pour tous les
            modèles Mac, y compris tailles 21,5", 24" et 27". Résolution
            problèmes démarrage, connectivité réseau, arrêts aléatoires, écran
            gris, carte logique, AirPort et démarrage écran dossier."
          </span>
          <Button title="Appler maintenant" />
        </div>
      </section>
    </div>
  );
}
