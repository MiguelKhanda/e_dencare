'use client'
import { useState } from 'react'
import service_Data from './services'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Card = () => {

  return (
   <div className='z-40 opacity-90'>
    <Image
     src={service_Data[0].image} 
     alt='Image'
     height={800}
     width={1200}
     />
     <p className='bg-linear-to-r from-primary to-light'>{service_Data[0].service}</p>
   </div>
  )
}

export default Card