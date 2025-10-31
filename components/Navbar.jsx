'use client'
import {motion} from 'framer-motion'

import Image from 'next/image'
import { useState } from 'react'
import {IoClose, IoMenu} from 'react-icons/io5'
import SideBar from './SideBar'
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick=()=>{
    setIsClicked(!isClicked)
  }
  const MotionIcon = motion.create(IoClose)
  return (
    <nav className='fixed flex w-full bg-primary items-center justify-between  px-4 py-4 backdrop-blur-md opacity-70 top-0 left-0 border-b-2 border-accent z-50'>
        <Image
            src='/images/logo.svg'
            alt='EdenCare logo'
            width={60}
            height={70}
            priority
            className='opacity-100 w-20'
        />
       
          {!isClicked ?(
             <motion.div 
             className="menu p-2 bg-accent z-50 absolute right-10 sm:hidden">
                <IoMenu
                className='text-3xl text-light opacity-65 z-50 sm:hidden' onClick={()=>handleClick()}
                />
              </motion.div>
            ):(
              <motion.div 
              initial={{x:100}}
              animate={{x:0}}
              transition={{duration:1,ease:'easeInOut'}}
              className="menu p-2 z-50 absolute right-10 sm:hidden">
                <MotionIcon
                 initial={{x:100}}
                 animate={{x:0}}
                 transition={{duration:1,ease:'easeInOut'}}
                className='text-3xl' onClick={()=>handleClick()}
                />
              </motion.div>
            )}            
        {isClicked&&(
          <SideBar/>
        )}
    </nav>
  )
}

export default Navbar