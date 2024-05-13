"use client";

import Button from "@/app/components/Button/Button";
import FeatureCard from './_components/FeatureCard';
export default function Page() {
  return (
    <>
      <section className="min-h-screen">
        <section className="flex bg-[#f7f7f7] bg-[url('/images/hero.jpeg')] bg-cover bg-center text-white text-center py-40 relative">
          <div className="relative pl-8 md:pl-16 z-10 flex flex-col items-start justify-start gap-4">
            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-left text-black">
              Des solutions digitales sur mesure <br /> pour booster votre réussite
            </h1>
            <div>
              <Button title="09 70 70 82 21" />
              <small className="block mt-2 text-black">Appel gratuit non surtaxé</small>
            </div>
          </div>
        </section>

        <div className="p-4 flex items-center justify-center flex-col md:flex-row gap-4 md:gap-20">

          <FeatureCard title="SITE CORPORATE" >
            Site vitrine, site corporate B2C/B2B, site événementiel. Accompagnement de la stratégie digitale du design à l’UX/UI ainsi qu’à la création technique : WordPress, Symfony, React, Angular, Ruby on Rails.
          </FeatureCard>
          <FeatureCard title="CRÉATION D’OUTILS SUR MESURE" >
            Extranet/Intranet, support digital pour les équipes de vente, portail sur mesure avec fonctionnalités avancées et adaptées au besoin de vos équipes.
          </FeatureCard>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-around p-20 gap-8">
          <div className="text-xl tracking-wide md:w-1/2">
            Développement web: Sites corporate et vitrine, sites e-commerce performants, extranet et outils métiers sur mesure, nous concevons des solutions digitales qui répondent aux exigences les plus pointues.
          </div>
          <img src="images/dev1.jpeg" alt="Development" className="w-80" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around p-20 gap-8">
          <img src="images/dev2.jpeg" alt="Development" className="w-80" />
          <div className="text-xl tracking-wide md:w-1/2">
            Conseil en stratégie digitale et communication: Nos experts vous accompagnent dans l&apos;élaboration d&apos;une stratégie digitale cohérente et efficace, en parfaite adéquation avec vos objectifs de communication et de marketing.
          </div>
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

