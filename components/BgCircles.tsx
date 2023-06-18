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
        <div className='absolute border border-[#fd1212d4] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-gray-500 rounded-full h-[300px] w-[300px] mt-52 animate-pulse'/>
        <div className='absolute border border-gray-600 rounded-full h-[500px] w-[500px] mt-52 animate-pulse'/>
        <div className='absolute border border-gray-800 opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
        <div className='absolute border border-gray-900 rounded-full h-[800px] w-[800px] mt-52 animate-pulse '/>
    </motion.div>
  )
}

export default BgCircles