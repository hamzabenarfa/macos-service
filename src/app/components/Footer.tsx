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
{/* 
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
            </div> */}

            <div className="flex w-full flex-col justify-center space-y-2 p-4">
              <div className="flex flex-col items-start">
                <a href="tel:0970708221" className="hover:underline">
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
              Macos-service est une société privée à responsabilité limitée qui n&apos;a aucun lien, de quelque nature que ce soit, avec la société Apple.
              Macos-service n&apos;est ni un réparateur, ni un revendeur agréé par la société Apple. Plus généralement, Macos-service n&apos;exerce aucune activité qui aurait fait l&apos;objet d&apos;une approbation ou d&apos;une autorisation quelconque de la société Apple. Les droits de propriété intellectuelle portant sur des produits de la marque Apple sont la propriété exclusive de la société Apple.
              iPhone, iPod, iPad, Mac, MacBook, MacBook Pro, MacBook Air, iMac, Mac Mini, Apple Watch sont des marques déposées d&apos;Apple Inc.

            </small>
            <div>
              <small>Copyright Macos-service™ 2023</small>
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
