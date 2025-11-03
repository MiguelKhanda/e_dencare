'use client'
import Button from './Button'
import { useState } from 'react'
import service_Data from './services'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleNext = () => {
    currentIndex===(service_Data.length-1)?setCurrentIndex(0):setCurrentIndex(currentIndex+1)
  }
  const handlePrev = () => {
    currentIndex === 0 ? setCurrentIndex(service_Data.length-1): setCurrentIndex(currentIndex-1)
  }
  
  return (
   <div className='z-40 pt-40 relative'>
    <Image
     src={service_Data[currentIndex].image} 
     alt='Image'
     height={800}
     width={1200}
     className='absolute top-0'
     />
     <FaArrowLeft className='h-6 w-6 absolute top-2/3 border rounded-full' onClick={handlePrev}/>
     <FaArrowRight className='h-6 w-6 absolute top-2/3 border rounded-full right-0' onClick={handleNext}/>
     <p className='bg-linear-to-r from-primary to-light absolute top-0 w-full'>{service_Data[currentIndex].service}</p>
     <div className='absolute -bottom-60'>
        <Button text='Learn more'/>
     </div>
   </div>
  )
}

export default Card