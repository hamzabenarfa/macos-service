import React from 'react'
import Image from 'next/image'
export default function Landing() {
  return (
    <section className='sticky top-0 mx-auto flex h-screen   max-w-[1350px] items-center justify-between px-8'>
        <div className='space-y-8'> 
            <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
                <span className='block bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text'>Service de Réparation </span>
                <span className='block'>Expert Mac</span>
                <span className='block'>Support Professionnel</span>
            </h1>
            
            <div>
                <button title="09 80 80 67 64"/>
                <a className='link'>Contacter</a>
            </div>
        </div>
        <div className='relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]'>
            <Image src='/iphone1.png' alt='iphone' layout='fill' objectFit='contain' />
        </div>
        
    </section>
  )
}
