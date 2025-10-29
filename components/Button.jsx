'use client'
import { motion } from 'framer-motion'
import React from 'react'

const Button = ({text, isAnimate}) => {
  return (
    <motion.button 
     initial={{y:30, scale:0}}
     animate={{y:0, scale:1}}
     whileHover={{scale:1.3, backgroundColor:'#19381F',color:'white'}}
     whileTap={{scale:1.3, backgroundColor:'#19381F',color:'white'}}
     transition={{duration:2, ease:'easeInOut'}}
     className='bg-primary py-4 px-4 rounded-2xl text-md mt-7 text-dark'>
        {text}
    </motion.button>
  )
}

export default Button