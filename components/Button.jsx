'use client'
import { motion } from 'framer-motion'
import React from 'react'

const Button = ({text, align}) => {
  return (
    <motion.div
     initial={{y:30, scale:0}}
     animate={{y:0, scale:1}}
     transition={{duration:2, ease:'easeInOut'}}
     className='opacity-100 z-50'
     >
      <button className='hover:opacity-50 p-4 bg-primary rounded-2xl text-md mt-7 text-dark md:px-8 md:py-6 md:text-lg hover:text-light'>{text}</button>
    </motion.div>
  )
}

export default Button