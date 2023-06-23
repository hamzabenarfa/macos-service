"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';

export default function Page() {
  const slides = [
    {
      url: '/macmini1.jpg',
      alt: 'macmini',
    },
    {
      url: '/macmini2.jpg',
      alt: 'macmini',
    },
    {
      url: '/macmini3.png',
      alt: 'macmini',
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
     
      <section className="min-h-screen bg-[#000] relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full duration-500 absolute ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            } ${isAnimating ? 'fade-animation' : ''}`}
            onAnimationEnd={handleAnimationEnd}
          >
            <Image
              src={slide.url}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}

      
      </section>
      <section className='min-h-screen bg-[#000] flex justify-center'>
          <div className='flex flex-col items-center'>
          <span className="block text-3xl font-bold bg-gradient-to-r from-stone-500 to-zinc-500 text-transparent bg-clip-text">
          Mac mini
          </span>
          <span className="block  text-5xl font-bold bg-gradient-to-r from-stone-500 to-zinc-500 text-transparent bg-clip-text">
          More muscle.
          </span>
          <span className="block text-7xl font-semibold bg-gradient-to-r from-stone-500 to-zinc-500 text-transparent bg-clip-text">
          More hustle.
          </span>
          <p className='block font-semibold px-96 text-center py-8  bg-gradient-to-r from-stone-500 to-zinc-500 text-transparent bg-clip-text'>Mac France est un centre de dépannage Apple Mac de premier plan en France, offrant des services de réparation spécialisés pour les Mac mini à des prix abordables. Nous proposons une gamme complète de services de support technique pour le Mac mini, tels que la réparation et le remplacement de la carte logique, les mises à niveau de mémoire, le remplacement du disque dur, le remplacement du SuperDrive et la récupération de données. Nos techniciens chevronnés sont en mesure de résoudre rapidement tous les problèmes liés à votre Mac mini. Nous réparons tous types de problèmes, notamment les problèmes d'alimentation, de luminosité de l'écran, de démarrage, d'arrêt inattendu, d'affichage vidéo, de clavier Bluetooth, de panique du noyau, de problèmes réseau, de défaillance de la carte logique, de non-réveil de l'ordinateur, de ports défectueux, de CD/DVD bloqués, de lenteur du Mac mini et d'autres problèmes matériels. Grâce à notre vaste stock de pièces de rechange et d'accessoires Apple Mac, nous sommes en mesure d'effectuer la plupart des réparations et des mises à niveau rapidement.</p>
          <Button title='Appler maintenant' />
          </div>
      </section>
    </>
  );
}
