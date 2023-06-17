import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4 ">
        <div className="flex items-center justify-center md:w-1/5 ">
          <Link href="/">
            <div
              className="relative h-10 w-5 cursor-pointer 
        transition hover:opacity-100 "
            >
              <Image
                src="/apple-logo.png"
                layout="fill"
                objectFit="contain"
                alt="Picture of the apple logo"
              />
            </div>
          </Link>
       
        </div>
        <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
            <Link href="/about" className="headerLink">about us</Link>
            <Link href="/service" className="headerLink">service</Link>
            <Link href="/contact" className="headerLink">contact</Link>
            <Link href="/support" className="headerLink">support</Link>
        </div>

  <div className="flex items-center justify-center gap-x-4 md:w1/5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="headerIcon">
           <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

    <Link href='/'>
      <div className="relative cursor-pointer">
        <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">5</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="headerIcon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    </Link>

    <Link href='/'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="headerIcon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
    </Link>

  </div>
      </header>
    </div>
  );
}
