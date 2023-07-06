"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BgCircles from './BgCircles'
import Link from 'next/link'
import Image from 'next/image'
type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Jawid Nezami",
      "Guy-who-loves-Coffee.jsx",
      "<LovestoCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center text-center justify-center overflow-hidden'>
      <BgCircles />
      <Image
        src='https://i.seadn.io/gcs/files/ab8500681ef3049af50ffafcc4954b2b.png?auto=format&dpr=1&w=1920'
        alt="thug"
        className='relative rounded-full h-36 w-32 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 max-sm:text-[10px] tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3 max-sm:text-lg'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>
        <div className="pt-5 max-sm:pt-20">
        <Link href="#about">
    <button className="heroButton max-sm:text-[8px]">About</button>
  </Link>
  <Link href="#experience">
    <button className="heroButton max-sm:text-[8px]">Experience</button>
  </Link>
  <Link href="#projects">
    <button className="heroButton max-sm:text-[8px]">Projects</button>
  </Link>
  <Link href="#skills">
    <button className="heroButton max-sm:text-[8px]">Skills</button>
  </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
