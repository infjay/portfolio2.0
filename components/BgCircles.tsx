"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const BgCircles = (props: Props) => {
   
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    animate={{
        scale: [1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,2,3,4,5,6,5.5,5,4.5,4,3.5,3,2,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={{
        duration:2.5
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#ffffffd4] rounded-full max-sm:h-[100px] max-sm:w-[100px] h-[150px] w-[150px] mt-52 animate-ping'/>
        <div className='absolute border border-[#03ff29f3] rounded-full max-sm:h-[180px] max-sm:w-[180px] h-[300px] w-[300px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#ffff5d] rounded-full max-sm:h-[260px] max-sm:w-[260px] h-[500px] w-[500px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#6b0ffff7] opacity-20 rounded-full max-sm:h-[330px] max-sm:w-[330px] h-[650px] w-[650px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#12fdf5d4] rounded-full max-sm:h-[420px] max-sm:w-[420px] h-[800px] w-[800px] mt-52 animate-pulse '/>
    </motion.div>
  )
}

export default BgCircles