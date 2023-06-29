"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="m-4 rounded-lg bg-[#F5F5F7] shadow ">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Macos-service™
          </a>
        </span>
        <span className="text-bold sm :text-center pl-10 text-sm text-gray-500 hover:underline ">
          <Link href="/cgv">C G V</Link>
        </span>

        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
              à propos
            </Link>
          </li>

          <li>
            <a
              href="mailto: contact@macos-service.fr"
              className="mr-4 hover:underline md:mr-6"
            >
              Mail : contact@macos-service.fr
            </a>
          </li>
          <li>
            <a href="tel:0980806764" className="hover:underline">
              Telephone : 09 80 80 67 64
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
