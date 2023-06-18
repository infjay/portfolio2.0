import React from 'react'
import {motion} from "framer-motion"
type Props = {}

const XpCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center
    space-y-7 flex-shrink-0 w-[500px] md:w-[600px xl:w-[900px]
    snap-center bg-gray-950 p-10 hover:opacity-100 opacity-40 cursor-pointer 
    transition-opacity duration-200
    '>
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{ duration : 1.2 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center'
        src="https://s3-symbol-logo.tradingview.com/roche--600.png" 
        alt="roche" />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of JayFarm</h4>
            <p className='font-bold text-2xl mt-1'>Jayfarm</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAQZpkL_FIBpWC3FuIoEJs1DtZE3ERZ9yJWng-CnaSavFRrsI38gmz5Yr2c3TxdiyaXg&usqp=CAU" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://s3-symbol-logo.tradingview.com/roche--600.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://s3-symbol-logo.tradingview.com/roche--600.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://s3-symbol-logo.tradingview.com/roche--600.png" alt="" />
                {/* Tech Stack */}
            </div>
            <p className='uppercase py-5 text-gray-300'>started -- ended</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}

export default XpCard