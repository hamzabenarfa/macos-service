"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
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
              <Image
                src={slide.url}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="min-h-screen bg-[#000] ">
        <div className="flex flex-col items-center p-5 ">
          <span className="block bg-gradient-to-r from-stone-500 to-zinc-500 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Mac mini
          </span>
          <span className="block  bg-gradient-to-r from-stone-500 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            More muscle.
          </span>
          <span className="block bg-gradient-to-r from-stone-500 to-zinc-500 bg-clip-text text-5xl font-semibold text-transparent md:text-8xl">
            More hustle.
          </span>
          <p className="block bg-gradient-to-r from-stone-500 to-zinc-500 bg-clip-text px-5 py-8  text-justify font-semibold text-transparent md:px-60 md:text-2xl">
            Mac France est un centre de dépannage Apple Mac de premier plan en
            France, offrant des services de réparation spécialisés pour les Mac
            mini à des prix abordables. Nous proposons une gamme complète de
            services de support technique pour le Mac mini, tels que la
            réparation et le remplacement de la carte logique, les mises à
            niveau de mémoire, le remplacement du disque dur, le remplacement du
            SuperDrive et la récupération de données. Nos techniciens chevronnés
            sont en mesure de résoudre rapidement tous les problèmes liés à
            votre Mac mini. Nous réparons tous types de problèmes, notamment les
            problèmes d&apos;alimentation, de luminosité de l&apos;écran, de démarrage,
            d&apos;arrêt inattendu, d&apos;affichage vidéo, de clavier Bluetooth, de
            panique du noyau, de problèmes réseau, de défaillance de la carte
            logique, de non-réveil de l&apos;ordinateur, de ports défectueux, de
            CD/DVD bloqués, de lenteur du Mac mini et d&apos;autres problèmes
            matériels. Grâce à notre vaste stock de pièces de rechange et
            d&apos;accessoires Apple Mac, nous sommes en mesure d&apos;effectuer la
            plupart des réparations et des mises à niveau rapidement.
          </p>
          <Button title="Appler maintenant" />
        </div>
      </section>
    </>
  );
}
