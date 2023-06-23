import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <header className=" flex w-full items-center justify-between bg-[#F9F9FA]  ">

        <div className="flex items-center justify-center md:w-2/6 ">
          <Link href="/">
            <div
              className="relative cursor-pointer transition hover:opacity-100 ">
              <Image
                src="/apple-ascp.png"
                width={150}
                height={50}
                alt="Picture of the apple logo"
              />
            </div>
          </Link>
       
        </div>
        <div className="hidden flex-1 items-center justify-center space-x-8 md:flex md:w-3/6">
       
          <div className="flex flex-col items-center">
            <Link href="/macbookpro">
          <Image src="/macbookpro.png" width={50} height={50} className="headerIcon" alt="Picture of the macbook logo" />
            </Link>
            <Link href="/macbookpro" className="headerLink ">MacBook Pro</Link>
          </div>
           
           <div className="flex flex-col items-center">
            <Link href="/macbookair">
           <Image src="/macbook.png" width={50} height={50} className="headerIcon" alt="Picture of the macbook logo" />
            </Link>
            <Link href="/macbookair" className="headerLink ">MacBook Air</Link>
           </div>

           <div className="flex flex-col items-center">
            <Link href="/imac">
            <Image src="/imac.png" width={50} height={50} className="headerIcon" alt="Picture of the imac logo" />
            </Link>
            <Link href="/imac" className="headerLink">iMac </Link>
            
           </div>
           <div className="flex flex-col items-center">
            <Link href="/macmini">
            <Image src="/macmini.png" width={50} height={50} className="headerIcon" alt="Picture of the macmini logo" />
            </Link>
            <Link href="/macmini" className="headerLink">Mac mini</Link>
           </div>
        </div>

        <div className="hidden flex-1 items-center justify-center gap-x-3 md:flex md:w-1/6">
            <Link href='/service'>
                    <span className="headerLink">Service</span>
            </Link>
            <Link href='/support'>
                    <span className="headerLink">Support</span>
            </Link>
        </div>
      </header>
    </div>
  );
}
