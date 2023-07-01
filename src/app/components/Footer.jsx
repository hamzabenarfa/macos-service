"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="grid-row-2 grid h-full bg-gradient-to-t from-gray-200 to-gray-50 ">
          <div className="flex flex-row  items-center justify-between space-x-4">
            <div className="flex w-full justify-center space-y-2 bg-teal-300 p-4">
              <div className="flex flex-col items-start">
                <Link href="/macbookpro" className="footerNav">
                  <img
                    src="/macbookpro.png"
                    width={40}
                    height={40}
                    className="headerIcon"
                    alt="Picture of the macbook logo"
                  />
                  <span> MacBook Pro</span>
                </Link>

                <Link href="/macbookair" className="footerNav">
                  <img
                    src="/macbook.png"
                    width={40}
                    height={40}
                    className="headerIcon"
                    alt="Picture of the macbook logo"
                  />
                  <span> MacBook Air</span>
                </Link>

                <Link href="/imac" className="footerNav">
                  <img
                    src="/imac.png"
                    width={40}
                    height={40}
                    className="headerIcon"
                    alt="Picture of the imac logo"
                  />
                  <span> iMac</span>
                </Link>

                <Link href="/macmini" className="footerNav">
                  <img
                    src="/macmini.png"
                    width={40}
                    height={40}
                    className="headerIcon"
                    alt="Picture of the macmini logo"
                  />
                  <span> Mac mini</span>
                </Link>
              </div>
            </div>

            <div className="flex w-full flex-col justify-center space-y-2 p-4">
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">Horaires d'ouvertures</p>
                <p>7 jours sur 7</p>
                <p>09:00 H - 23:00 H</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">informations légales</p>
                <p className="text-semibold underline  ">
                  <Link href="/cgv">C G V</Link>
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col justify-center space-y-2 p-4">
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">Contactez nous</p>

                <a href="tel:0980806764" className="hover:underline">
                  09 80 80 67 64
                </a>
                <small>appel non surtaxé!</small>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">Email</p>
                <p className="text-semibold underline ">
                  <a
                    href="mailto: contact@macos-service.fr"
                    className="mr-4 hover:underline md:mr-6"
                  >
                    contact@macos-service.fr
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <small> Macos-service™ © 2023</small>
            <small className="p-2 text-center  text-xs font-light">
              Ce site internet est protégé par les lois de protection de la
              propriété intellectuelle, recopier, imiter ou s'inspirer de
              celui-ci est passible de sanction judiciaire. Macos-service™ est
              un centre international d'assistance et de formation pour les
              produits Apple. Site privé distinct de la marque Apple.
              Macos-service™ apporte un support sur Mac dans la limite des
              possibilités de dépannage à distance et couvre les problématiques
              d'ordre logiciel et d&apos;utilisation. En cas de problème
              matériel nécessitant une réparation physique, nous vous
              conseillerons sur les solutions complémentaires adaptées.
              *récupération possible dans la majorité des cas de plus de 75% des
              données perdues. *Certains Techniciens sont certifiés par Apple et
              le support technique Mac de la marque Apple *Des ventes et
              services complémentaires peuvent s'appliquer
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}
