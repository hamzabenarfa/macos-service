"use client"

import Link from "next/link";
import { useState } from "react";
import Button from "./Button/Button";

const links = [
  { href: "/", text: "Accueil" },
  { href: "/#service", text: "Service" },
  { href: "/developpement-integration", text: "Développement et Intégration" },
  { href: "/contact", text: "Contact" }
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div>
      <header className="flex w-full items-center justify-between border-b p-4">
        <div className="flex flex-col items-center justify-center pl-4 md:px-12">
          <Link href="/" onClick={() => setNavbarOpen(false)}>
            <div className="headerLink pt-4 text-left">
              <p className="animate-fade-down animate-ease-in-out">Soutien Certifié</p>
              <p>Professionnel</p>
            </div>
          </Link>
        </div>

        <div className="md:flex md:w-3/6 md:flex-1 md:justify-center md:gap-4 md:space-x-4 hidden">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <p className="navLink">{link.text}</p>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center lg:hidden">
          <Button title="09 70 70 82 21" />
        </div>

        <div className="pr-2 md:hidden">
          <button
            onClick={toggleNavbar}
            className="focus:outline-none"
          >
            <img
              src={navbarOpen ? "/svg/close.svg" : "/svg/menu.svg"}
              width={40}
              height={40}
              alt="Menu Logo"
              className="hover:cursor-pointer"
            />
          </button>
        </div>
      </header>

      <div className={`lg:hidden ${navbarOpen ? "block" : "hidden"}`}>
        <div className="bg-[#F9F9FA] flex flex-col items-center justify-center gap-1 p-2">
          {links.map((link, index) => (
            <Link href={link.href} key={index} onClick={toggleNavbar} >
              <p className="navLink">{link.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
