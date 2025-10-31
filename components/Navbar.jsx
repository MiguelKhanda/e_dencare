'use client'
import './Navbar.module.css'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import {IoClose, IoMenu} from 'react-icons/io5'
import SideBar from './SideBar'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick=()=>{
    setIsClicked(!isClicked)
  }
  const MotionIcon = motion.create(IoClose)
  return (
    <nav className='fixed flex w-full bg-primary items-center justify-between  px-4 py-4 backdrop-blur-md opacity-70 top-0 left-0 border-b-2 border-accent z-50'>
        <Image
            src='/images/logo.png'
            alt='EdenCare logo'
            width={60}
            height={70}
            priority
            className='opacity-100 w-20'
        />
        <ul className='gap-5 items-center justify-center hidden text-xl sm:flex'>
          <li>Hero</li>
          <li>About</li>
          <li>Services</li>
          <li>Choice</li>
          <li>Contact</li>
        </ul>
        <ul className='gap-2  hidden sm:flex'>
          <BiLogoFacebook size={25} className='hover:text-secondary'/>
          <BiLogoInstagram size={25} className='hover:text-secondary'/>
          <BiLogoTwitter size={25} className='hover:text-secondary'/>
        </ul>
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