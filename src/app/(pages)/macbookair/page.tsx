import Image from "next/image";
import Button from "@/app/components/Button/Button";
export default function page() {
  return (
    <div>      
    <section className="grid grid-cols-2 place-items-center  min-h-screen bg-[#FBFBFB] m-5 rounded-2xl mx-16">
    <div className="flex flex-col justify-center items-center px-10">
      <h1 className="text-color-[#1D1D1F] capitalize text-8xl">
        macbook Air{" "}
      </h1>
      <p className="text-color-[#767677] text-sm">
        Nous offrons un service de dépannage, réparation, récupération et
        mise à niveau de haute qualité pour tous les modèles MacBook Pro, y
        compris les tailles 13, 15, 16 et 17 pouces. Que votre MacBook Pro
        présente des problèmes de carte logique, de batterie ou simplement
        besoin d'une mise à niveau, notre équipe spécialisée dans la
        réparation des produits Apple est là pour vous aider. Contactez-nous
        dès aujourd'hui pour un service rapide et fiable sur tous les
        modèles Apple MacBook Pro, y compris les générations 1, 2 (Unibody),
        3 (Retina), 4 (Touch Bar), M1 et M2.
      </p>
      <Button title="09 80 80 67 64" />
    </div>
    <div>
      <Image
        src="/macbook_air_large.jpg"
        width={738}
        height={622}
        alt="mac"
      />
    </div>
  </section>
  <section className="grid grid-row-2 place-items-center  min-h-screen bg-[#000000] m-5 rounded-2xl mx-16">
    <div className="flex flex-col justify-center items-center px-10">
      <h1 className="text-white capitalize text-8xl mt-3">
        macbook pro
      </h1>
    </div>
    <div>
      <Image
        src="/macbook_air_m1_large.jpg"
        width={1380}
        height={486}
        alt="mac"
      />
    </div>
  </section></div>
  )
}
