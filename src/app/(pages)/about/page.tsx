import Button from "@/app/components/Button/Button";
import { MonitorUp } from "lucide-react";

export default function page() {
  return (
    <>
      <section className=" min-h-screen">

        <section className="flex  bg-[#f7f7f7] bg-[url('/hero.jpeg')] bg-cover bg-center text-white text-center py-40 relative">
          <div className="relative pl-8 md:pl-16 z-10 flex flex-col items-start justify-start gap-4 ">

            <h1 className=" text-2xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-left text-black">
              Des solutions digitales sur mesure <br /> pour booster votre réussite


            </h1>
            <div>

              <Button title="09 80 80 36 43" />
              <small className="block mt-2 text-black">Appel gratuit non surtaxé</small>
            </div>
          </div>

        </section>
        <div className="p-4 flex items-center justify-center flex-col md:flex-row gap-4 md:gap-20">
          <div className="rounded-xl bg-white shadow-lg px-6 py-16 space-y-4 flex flex-col justify-center items-start  w-80">
            <div className="flex w-full justify-between">
              <h1 className="font-bold text-xl">SITE CORPORATE  </h1>
              
              <MonitorUp />
            </div>
        
            <br />
            <div className="">
              <p>Site vitrine, site corporate B2C  <br />
                / B2B, site événementiel. <br />

                Accompagnement de la stratégie digitale du design à l’UX/UI ainsi qu’à la création technique : WordPress, Symfony, React, Angular, Ruby on Rails.</p>

            </div>
          </div>
          <div className="rounded-xl bg-white shadow-lg px-6 py-16 space-y-4 flex flex-col justify-center items-start  w-80">
            <div className="flex w-full justify-between">
              <h1 className="font-bold text-xl">CRÉATION D’OUTILS SUR MESURE  </h1>
              <MonitorUp />
            </div>

            <br />
            <div className="">
              <p>Extranet/Intranet, support digital pour les équipes de vente,<br />
                portail sur mesure avec fonctionnalités avancées et <br /> adaptées au besoin de vos équipes
              </p>
            <br />
            </div>
          </div>

        </div>

        <div className="flex items-center justify-around flex-col-reverse md:flex-row p-20 gap-8">
          <h1 className="text-xl tracking-wide">
            Développement web: Sites corporate et vitrine, sites e-commerce performants, extranet et outils métiers sur mesure, nous concevons des solutions digitales qui répondent aux exigences les plus pointues.
          </h1>
          <img src="dev1.jpeg" alt="" className="w-80" />
        </div>
        <div className="flex items-center justify-around flex-col md:flex-row  p-20 gap-8">
          <img src="dev2.jpeg" alt="" className="w-80" />
          <h1 className="text-xl tracking-wide">
            Conseil en stratégie digitale et communication: Nos experts vous accompagnent dans l&apos;élaboration d&apos;une stratégie digitale cohérente et efficace, en parfaite adéquation avec vos objectifs de communication et de marketing.
          </h1>
        </div>

        <div className="p-20">
          <h1 className="text-2xl text-center font-bold">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et découvrir comment nos solutions digitales peuvent vous aider à atteindre vos objectifs.

          </h1>
        </div>
      </section>
    </>
  );
}
