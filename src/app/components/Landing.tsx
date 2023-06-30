"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button/Button";

export default function Landing() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="mx-auto   flex max-w-[1350px] items-center justify-center px-8 pt-5 mb-16 ">
      <div className="space-y-8 text-center">
        <h1 className="space-y-3 text-4xl md:text-5xl font-semibold tracking-wide lg:text-6xl xl:text-5xl">
          <span className="block bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Un Problème Sur votre Mac ?
          </span>
          <Image src="/macpro.png" alt="mac" width={750} height={750} />
          <span className="block text-3xl md:text-5xl">Contacter le Support</span>
          <span className="block text-2xl md:text-3xl">Un expert vous prend en charge</span>
          <span className="block text-sm">
            sans rendez-vous en 20 minutes !
          </span>
        </h1>
        <div>
          <Button title="09 80 80 67 64" />
          <small>Appel gratuit non surtaxé</small>
        </div>
        {/* <div
          className={`${showButton ? "fixed bottom-4 right-4 " : ""} `}
        >
          <Button title="09 80 80 67 64" />
        </div> */}
      </div>
    </section>
  );
}
