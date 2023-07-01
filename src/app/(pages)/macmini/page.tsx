"use client";
import { useState, useEffect } from "react";

import Button from "@/app/components/Button/Button";

export default function Page() {
  const slides = [
    {
      url: "/macmini1.jpg",
      alt: "macmini",
      width: 1758,
      height: 898,
    },
    {
      url: "/macmini2.jpg",
      alt: "macmini",
      width: 1758,
      height: 898,
    },
    {
      url: "/macmini3.png",
      alt: "macmini",
      width: 1758,
      height: 898,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <>
      <section className="min-h-screen bg-[#000]  ">
        <div>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute h-full w-full duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              } ${isAnimating ? "fade-animation" : ""}`}
              onAnimationEnd={handleAnimationEnd}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
              />
            </div>
          ))}
        </div>
      </section> 
      <section className=" min-h-screen space-y-8 bg-[#000] p-8 -mt-80 md:mt-0 md:pt-14   ">
        <div className="flex flex-col items-center justify-center space-y-8">
          <span className=" bg-gradient-to-r from-stone-500 to-zinc-500 bg-clip-text text-3xl font-bold text-transparent md:text-6xl">
            Mac minis
          </span>
          <p className=" macmini">
            Réparez et améliorez votre Mac mini en un clin d&apos;œil ! Des
            délais rapides, un service de qualité.
          </p>
          <p className=" macmini">
            Votre Mac mini ne s&apos;allume pas ? Écran VGA sombre ? Pas de
            carillon au démarrage ? Pas de panique ! Notre équipe experte est là
            pour résoudre tous ces problèmes et plus encore.
          </p>
          <p className=" macmini">
            Des arrêts inopinés ? Pas de vidéo ? Ne vous inquiétez plus ! Nos
            techniciens compétents sont prêts à remettre votre Mac mini sur les
            rails.
          </p>
          <p className=" macmini">
            Avec des délais d&apos;exécution rapides, nous proposons des
            services complets de réparation et de mise à niveau pour votre Mac
            mini. Faites confiance à notre expertise et retrouvez un Mac mini
            comme neuf !
          </p>
          <p className=" macmini">
            Contactez-nous dès maintenant et laissez-nous prendre soin de votre
            Mac mini. Votre satisfaction est notre priorité !
          </p>
          <Button title="Appler maintenant" />
        </div>
      </section>
    </>
  );
}
