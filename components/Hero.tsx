"use client"
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
type Props = {}

function Hero({}: Props) {
  const [text,count] = useTypewriter({
    words: [
        "Hi, The Name's Jawid Nezami",
        "Guy-who-loves-Coffee.jsx",
        "<LovestoCodeMore />",
    ],
    loop:true,
    delaySpeed:2000,
  })
    return (
    <div>
        <span>{text}</span>
        <Cursor cursorColor='#f7ab0a' />
    </div>
  )
}

export default Hero