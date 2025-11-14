'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './Button'
import Link from 'next/link'

const ChoiceSlider = ({data}) => {
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev)=>prev === data.length-1?0:prev+1)
        }, 6000)
        return () => clearInterval(interval)
    },[])
  return (
    <div className='relative w-full max-w-4xl mx-auto overflow-hidden bg-light rounded-4xl shadow-2xl shadow-dark'>
        <motion.div className='flex'
            animate={{x:`-${current * 100}%`}}
            transition={{type:'spring', stiffness:50,damping:20}}
        >
            {data.map(({id,image,service,h1}) => (
                <div 
                    className='flex flex-col min-w-full relative' key={id}>
                    <Image
                        src={image}
                        alt='Choose Us'
                        width={500}
                        height={500}
                        className='h-80 object-fit mt-10 flex self-center md:h-100'
                    />
                    <h1 className='text-center text-secondary mt-10'>{h1}</h1>
                    <p className='text-center'>{service}</p>
                    <div className='self-center'>
                        <Link href ='services/'>
                            <Button text={'Learn more'}/>
                        </Link>
                    </div>
            </div>
            ))}
        </motion.div>
    </div>
  )
}

export default ChoiceSlider