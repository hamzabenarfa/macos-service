import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="grid-row-2 grid h-full bg-gradient-to-t from-gray-200 to-gray-50 ">
          <div className="flex flex-col items-center  space-x-4 md:flex-row md:justify-between">
            <div className="flex w-full justify-start space-y-2 p-6 md:justify-center">
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">Horaires d&apos;ouvertures</p>
                <p className=" capitalize">du lundi au vendredi </p>
                <p>09:00 H - 18:00 H</p>
                <p>{""}</p>
                <br />
                
              </div>
           
              
            </div>

            <div className="flex w-full flex-col justify-center space-y-2 p-4">
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">Informations légales</p>
                <Link href="/about">
                 <p className=" capitalize hover:underline">À propos de nous</p>
                </Link>
                <Link href="/mentions-legales" >
                  <p className="hover:underline">Mentions légales </p>
                </Link>
                <Link href="/cgv" >
                  <p className="hover:underline"> CGV</p>
                </Link>
              </div>
              <div className="flex flex-col items-start">
                
              </div>
            </div>

            <div className="flex w-full flex-col justify-center space-y-2 p-4">
              <div className="flex flex-col items-start">
                <a href="tel:0980803643" className="hover:underline">
                <span className="text-lg font-bold">Service client</span> : 09 80 80 36 43
                </a>
                <small>appel non surtaxé!</small>
              </div>
              <div className="flex flex-col items-start" id="contact">
                <p className="text-lg font-bold" >Email</p>
                <p className="text-semibold underline ">
                  <a
                    href="mailto: support@macos-service.com"
                    className="mr-4 hover:underline md:mr-6"
                  >
                    support@macos-service.com

                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
         

            <small className="p-2 text-center  text-xs font-light">
              Ce site internet est protégé par les lois de la propriété
              intellectuelle. Toute reproduction, imitation ou utilisation non
              autorisée de son contenu est strictement interdite et peut
              entraînùer des sanctions judiciaires. Macos-service est un centre
              d&apos;assistance spécialisé dans les produits Apple. Nous sommes
              un site privé indépendant de la marque Apple, mettant à votre
              disposition un support à distance complet pour résoudre
              efficacement les problèmes d&apos;utilisation de votre Mac. Notre
              équipe s&apos;efforce de vous offrir une assistance de qualité en
              exploitant au maximum nos compétences et notre expertise.
            </small>
            <div>
            <small> Macos-service™ 2023</small>
            <small className="pl-4 hover:underline  ">
              <Link href="/cgv">C G V</Link>
            </small>
            </div>
           
          </div>
        </div>
      </footer>
    </>
  );
}
