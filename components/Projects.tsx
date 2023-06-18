"use client"
import React from 'react'
import { motion } from "framer-motion"
type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory z-20 scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-orange-400'>
            {projects.map((project,i)=> (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                    className=''
                    initial={{ y:-300,
                    opacity:0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once:true }}
                    src="https://seibertconsulting.com/wp-content/uploads/brizy/imgs/responsive-mockup-featuring-three-different-electronic-devices-2028-el1-599x449x9x0x581x449x1595718125.png" alt="" />
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl text-center font-semibold'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                        Case Study {i+1} of {projects.length} :
                        </span> Project Name Coming
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                        Project summary  Project summary  Project summary  Project summary  Project summary  Project summary  Project summary  Project summary 
                    </p>
                </div>
                </div>
            ))}
            
        </div>
        <div className='w-full absolute top-[30%] bg-gradient-to-r from-yellow-700 to-black left-0 
        h-[500px] -skew-y-12 '>

        </div>
    </motion.div>
  )
}

export default Projects