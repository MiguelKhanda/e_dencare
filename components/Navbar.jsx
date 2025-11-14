'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import { createContext, useState } from 'react'
import {IoMenu} from 'react-icons/io5'
import FlyOutMenu from './FlyOutMenu'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import Link from 'next/link'

export const ToggleContext = createContext()

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  const MotionIcon = motion.create(IoMenu)
  return (
    <ToggleContext value = {[isClicked, setIsClicked]}>
      <nav className='flex w-full bg-primary items-center justify-between sm  px-3 py-0 backdrop-blur-md opacity-100 top-0 left-0 border-b-2 border-accent z-50'>
          <Image
              src='/images/logo.png'
              alt='EdenCare logo'
              width={60}
              height={70} 
              priority
              className='opacity-100 w-20 hover:shadow-2xl shadow-accent rounded-xl p-2'
          />
          <ul className='gap-1 items-center justify-center hidden md:text-xl sm:flex md:gap-5 text-md z-50 text-dark'>
            <Link href='#home' scroll={true} className='p-4 hover:text-secondary hover:bg-accent rounded text-dark'>Home</Link>
            
            <li className='p-4 hover:text-secondary hover:bg-accent rounded'><Link href=''>About</Link></li>
            <li className='p-4 hover:text-secondary hover:bg-accent rounded'><Link href='#service' scroll={true

            }>Services</Link></li>
            <li className='p-4 hover:text-secondary hover:bg-accent rounded'><Link href='#choice' scroll={true}>Why Choose Us</Link></li>
            <li className='p-4 hover:text-secondary hover:bg-accent rounded'><Link href='#contact' scroll={true}>Contact</Link></li>
          </ul>
          <ul className='gap-2  hidden sm:flex md:gap-6'>
            <BiLogoFacebook size={28} className='hover:text-secondary'/>
            <BiLogoInstagram size={28} className='hover:text-secondary'/>
            <BiLogoTwitter size={28} className='hover:text-secondary'/>
          </ul>
            {!isClicked?(
              <motion.div 
                  initial={{x:100}}
                  animate={{x:0}}
                  transition={{duration:0.5}}
              className="menu p-2 rounded bg-accent z-50 absolute right-5 sm:hidden">
                  <MotionIcon
                  className='text-3xl text-light opacity-65 z-50 sm:hidden' onClick={()=>handleClick()}
                  />
                </motion.div>
              ):(            
            <FlyOutMenu/>
          )}
      </nav>
    </ToggleContext>
  )
}

export default Navbar