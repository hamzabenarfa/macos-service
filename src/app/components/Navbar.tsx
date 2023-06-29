"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  return (
    <div>
      <header className=" flex w-full items-center justify-between bg-[#F9F9FA]  ">
        <div className="flex items-center justify-center md:w-2/6 ">
          <Link href="/">
            <div className="relative cursor-pointer transition hover:opacity-100 ">
              <Image
                src="/apple-ascp.png"
                width={150}
                height={50}
                alt="Picture of the apple logo"
              />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex  md:w-3/6 md:flex-1 md:justify-center md:gap-4 md:space-x-8">
          <Link href="/macbookpro" className="flex flex-col items-center">
            <Image
              src="/macbookpro.png"
              width={50}
              height={50}
              className="headerIcon"
              alt="Picture of the macbook logo"
            />
            MacBook Pro
          </Link>

          <Link href="/macbookair" className="flex flex-col items-center">
            <Image
              src="/macbook.png"
              width={50}
              height={50}
              className="headerIcon"
              alt="Picture of the macbook logo"
            />
            MacBook Air
          </Link>

          <Link href="/imac" className="flex flex-col items-center">
            <Image
              src="/imac.png"
              width={50}
              height={50}
              className="headerIcon"
              alt="Picture of the imac logo"
            />
            iMac
          </Link>

          <Link href="/macmini" className="flex flex-col items-center">
            <Image
              src="/macmini.png"
              width={50}
              height={50}
              className="headerIcon"
              alt="Picture of the macmini logo"
            />
            Mac mini
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-x-3 md:flex md:w-1/6">
            {/* <Link href="/service">
              <span className="headerLink">Service</span>
            </Link>
            <Link href="/support">
              <span className="headerLink">Support</span>
            </Link> */}

            <span className="headerLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="pr-2 md:hidden">
          {Navbar ? (
            <Image
              src="/close.svg"
              width={40}
              height={40}
              alt="Picture of the menu logo"
              onClick={() => setNavbar(!Navbar)}
              className="hover:cursor-pointer"
            />
          ) : (
            <Image
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
        className={`flex-1 justify-self-center  ${
          Navbar ? "block md:p-0" : "hidden"
        }`}
      >
        {Navbar && (
          <div className="flex-col justify-center bg-[#F9F9FA]">
            <Link
              href="/macbookpro"
              className="flex flex-col items-center"
              onClick={() => setNavbar(!Navbar)}
            >
              <Image
                src="/macbookpro.png"
                width={50}
                height={50}
                className="headerIcon"
                alt="Picture of the macbook logo"
              />
              <p>MacBook Pro</p>
            </Link>

            <Link
              href="/macbookair"
              className="flex flex-col items-center"
              onClick={() => setNavbar(!Navbar)}
            >
              <Image
                src="/macbook.png"
                width={50}
                height={50}
                className="headerIcon"
                alt="Picture of the macbook logo"
              />
              MacBook Air
            </Link>

            <Link
              href="/imac"
              className="flex flex-col items-center"
              onClick={() => setNavbar(!Navbar)}
            >
              <Image
                src="/imac.png"
                width={50}
                height={50}
                className="headerIcon"
                alt="Picture of the imac logo"
              />
              iMac
            </Link>

            <Link
              href="/macmini"
              className="flex flex-col items-center"
              onClick={() => setNavbar(!Navbar)}
            >
              <Image
                src="/macmini.png"
                width={50}
                height={50}
                className="headerIcon"
                alt="Picture of the macmini logo"
              />
              Mac mini
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
