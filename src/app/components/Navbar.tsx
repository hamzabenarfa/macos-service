"use client";
import Link from "next/link";

import { useState } from "react";
import Button from "./Button/Button";
export default function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  
  return (
    <div>
      <header className="flex w-full items-center justify-between bg-[#F9F9FA] p-4 ">
        <div className="flex flex-col items-center justify-center md:px-20 ">
          <Link href="/" onClick={() => setNavbar(false)}>
            <div className="headerLink pt-4 text-left">
              <p className=" animate-fade-down animate-ease-in-out">Soutien Certifié </p>
              <p>Professionnel</p>
            </div>
          </Link>
        </div>

        <div className="hidden xl:flex  md:w-3/6 md:flex-1 md:justify-center md:gap-4 md:space-x-6">
          <Link href="/" className="flex flex-col items-center">
            Accueil
          </Link>
{/* 
          <Link
            href="/#produit"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/#produit';
            }}
          >
            <p className="flex flex-col items-center">Produit</p>
          </Link> */}


          <Link
            href="/#tarif"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/#tarif';
            }}
          >
            <p className="flex flex-col items-center">Service</p>
          </Link>

          <Link href="/about" className="flex flex-col items-center capitalize">

            à propos de nous
          </Link>

          <Link
            href="/contact"
           
          >
            <p className="flex flex-col items-center">Contact</p>
          </Link>
          


        </div>
        <div className="hidden flex-1 items-center justify-center gap-x-3 md:flex md:w-1/6">
          <Button title="09 80 80 36 43" />
        </div>
        <div className="pr-2 md:hidden">
          {Navbar ? (
            <img
              src="/close.svg"
              width={40}
              height={40}
              alt="Picture of the menu logo"
              onClick={() => setNavbar(!Navbar)}
              className="hover:cursor-pointer"
            />
          ) : (
            <img
              src="/menu.svg"
              width={40}
              height={40}
              alt="Picture of the menu logo"
              onClick={() => setNavbar(!Navbar)}
              className="hover:cursor-pointer"
            />
          )}
        </div>
      </header>


      <div
        className={`flex-1 justify-self-center  ${Navbar ? "block md:p-0" : "hidden"
          }`}
      >
        {Navbar && (
          <div className="flex-col justify-center bg-[#F9F9FA]">
            <Link
              href="/"
              className="flex flex-col items-center"
              onClick={() => setNavbar(!Navbar)}
            >

              <p>Accueil</p>
            </Link>

            <Link
              href="/#produit"
              onClick={(e) => {
                e.preventDefault();
                setNavbar(!Navbar);
                window.location.href = '/#produit';
              }}
            >
              <p className="flex flex-col items-center">Produit</p>
            </Link>

            <Link
              href="/#tarif"
              onClick={(e) => {
                e.preventDefault();
                setNavbar(!Navbar);
                window.location.href = '/#tarif';
              }}
            >
              <p className="flex flex-col items-center">Tarif</p>
            </Link>

            <Link
              href="/about"
              className="flex flex-col items-center capitalize"
              onClick={() => setNavbar(!Navbar)}
            >

              à propos de nous
            </Link>

            <Link
              href="/contact"
             
            >
              <p className="flex flex-col items-center">Contact</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}


