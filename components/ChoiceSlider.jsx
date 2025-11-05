'use client'
import React, { useEffect, useState } from 'react'
import { choice_Data } from './db'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ChoiceSlider = () => {
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev)=>prev === choice_Data.length-1?0:prev+1)
        }, 3000)
        return () => clearInterval(interval)
    },[])
  return (
    <div className='relative w-full max-w-4xl mx-auto overflow-hidden'>
        <motion.div className='flex'
            animate={{x:`-${current * 100}%`}}
            transition={{type:'spring', stiffness:50,damping:20}}
        >
            {choice_Data.map(({id,image,service,h1}) => (
                <div 
                    className='flex flex-col min-w-full relative' key={id}>
                    <Image
                        src={image}
                        alt='Choose Us'
                        width={500}
                        height={500}
                        className='h-50 object-fit mt-10'
                    />
                    <h1 className='text-center text-secondary mt-10'>{h1}</h1>
                    <p className='text-center'>{service}</p>
            </div>
            ))}
        </motion.div>
    </div>
  )
}

export default ChoiceSlider