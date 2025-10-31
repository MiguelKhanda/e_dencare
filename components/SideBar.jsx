import {motion} from 'framer-motion'
import { useState } from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import { IoClose,IoMenu} from 'react-icons/io5'
const SideBar = ({isOpen}) => {
    const [x, setX] = useState(0)
    const [isClicked, setIsClicked] = useState(isOpen)
    const handleClick = () =>{
      setX(200)
      setIsClicked(!isClicked)
    }
  return (
    <div>
       {isClicked && (  <motion.div 
          initial={{x:200}}
          animate={{x:x}}
          transition={{duration:0.5, ease:'easeInOut'}}
          className="absolute right-0 top-0 bg-accent px-10 z-40 h-screen flex flex-col gap-5 text-secondary text-md items-center md:hidden">
          <IoClose
              className=' mt-10 text-3xl hover:text-primary' onClick={()=>handleClick()}
          />
          <ul className='mt-20 flex flex-col gap-5'>
              <li className='hover:text-primary hover:bg-dark p-2 rounded text-center'>Hero</li>
              <li className='hover:text-primary hover:bg-dark p-2 rounded text-center'>About</li>
              <li className='hover:text-primary hover:bg-dark p-2 rounded text-center'>Services</li>
              <li className='hover:text-primary hover:bg-dark p-2 rounded text-center'>Choice</li>
              <li className='hover:text-primary hover:bg-dark p-2 rounded text-center'>Contact</li>
          </ul>
          <ul className='flex gap-2'>
              <BiLogoFacebook size={30} className='hover:text-primary hover:bg-dark text-center'/>
              <BiLogoInstagram size={30} className='hover:text-primary hover:bg-dark text-center'/>
              <BiLogoTwitter size={30} className='hover:text-primary hover:bg-dark text-center'/>
          </ul>
      </motion.div>)}
      {
        isClicked && (
          <div className='bg-accent p-2 rounded'>
            <IoMenu
              size={30}
              className='text-3xl text-light opacity-65 z-50'
              onClick={() =>handleMenu()}
            />
          </div>
        )
      }
    </div>
  )
}

export default SideBar