'use client'

import {motion} from 'framer-motion'
import { useContext, useState } from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import { IoClose} from 'react-icons/io5'
import { ToggleContext } from './Navbar'
import Link from 'next/link'
import './FlyOutMenu.module.css'


const FlyOutMenu = () => {
  const [isClicked, setIsClicked] = useContext(ToggleContext)
  const [toggled, setToggled] = useState(0)
  const handleClick = () => {
    setToggled(200)
    setTimeout(() => {
        setIsClicked(!isClicked)
    },500)
  
  }
  return (
    <div id='menu' className='absolute h-screen z-50'>
        <motion.div 
          initial={{x:200}}
          animate={{x:toggled}}
          transition={{duration:0.5, ease:'easeInOut'}}
          className="opacity-100 fixed right-0 top-0 bg-accent px-10 z-50 h-screen flex flex-col gap-5 text-secondary text-md items-center md:hidden inset -0">
          <IoClose
              className=' mt-10 text-3xl hover:text-primary' onClick={()=>handleClick()}
          />
          <ul className='mt-20 flex flex-col gap-5'>
              <li className='hover:text-secondary hover:bg-dark p-2 rounded text-center'><Link href = '#home'>Home</Link></li>
              <li className='hover:text-secondary hover:bg-dark p-2 rounded text-center'><Link href = '#about'>About</Link></li>
              <li className='hover:text-secondary hover:bg-dark p-2 rounded text-center'><Link href = '#service'>Services</Link></li>
              <li className='hover:text-secondary hover:bg-dark p-2 rounded text-center text-secondary'><Link href = '#choice'>Why Choose Us</Link></li>
              <li className='hover:text-primary hover:bg-dark p-2 rounded text-center'><Link className='text-secondary' href = '#contact'>Contact</Link></li>
          </ul>
          <ul className='flex gap-2'>
              <BiLogoFacebook size={30} className='hover:text-primary hover:bg-dark text-center'/>
              <BiLogoInstagram size={30} className='hover:text-primary hover:bg-dark text-center'/>
              <BiLogoTwitter size={30} className='hover:text-primary hover:bg-dark text-center'/>
          </ul>
      </motion.div>
    </div>
  )
}

export default FlyOutMenu