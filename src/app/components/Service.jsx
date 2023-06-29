"use client";
import Image from "next/image";

export default function Service() {
  return (
    <>
      <section className=" min-h-screen  bg-[#FBFBFB]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-5xl font-medium  tracking-wide">
            <span className="block bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Nos services
            </span>
          </h1>
          <div className="flex flex-wrap items-center justify-center  md:w-full ">
            <div className="flex flex-col items-center        p-4 md:w-1/2 ">
              <Image
                src="/icons8-lock-100.png"
                width={100}
                height={100}
                alt="lock"
                className="headerIcon"
              />
              <div className="servicetext">Déverrouillage de session</div>
            </div>
            <div className="flex flex-col items-center         p-4 md:w-1/2">
              <Image
                src="/icons8-update-100.png"
                width={100}
                height={100}
                alt="update"
                className="headerIcon"
              />

              <div className="servicetext">
                Mise à jour du système d&apos;exploitation
              </div>
            </div>
            <div className="flex flex-col items-center         p-4 md:w-1/2">
              <Image
                src="/icons8-reset-100.png"
                width={100}
                height={100}
                alt="reset"
                className="headerIcon"
              />

              <div className="servicetext">
                Réinitialisation aux paramètres d&apos;usine
              </div>
            </div>
            <div className="flex flex-col items-center         p-4 md:w-1/2">
              <Image
                src="/icons8-download-100.png"
                width={100}
                height={100}
                alt="download"
                className="headerIcon"
              />

              <div className="servicetext">Installation d&apos;applications</div>
            </div>
            <div className="flex flex-col items-center         p-4 md:w-1/2">
              <Image
                src="/icons8-service-150.png"
                width={100}
                height={100}
                alt="service"
                className="headerIcon"
              />

              <div className="servicetext">
                Configuration de boîte mail et d&apos;imprimante
              </div>
            </div>
            <div className="flex flex-col items-center p-4 md:w-1/2">
              <Image
                src="/icons8-power-off-button-100.png"
                width={100}
                height={100}
                alt="power-off-button"
                className="headerIcon"
              />

              <div className="servicetext">Problèmes de démarrage</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}