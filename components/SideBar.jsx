import {motion} from 'framer-motion'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'

const SideBar = () => {
  return (
    <motion.div 
        initial={{x:100}}
        animate={{x:0}}
        exit={{x:100}}
        transition={{duration:1, ease:'easeInOut'}}
        className="absolute right-0 top-0 bg-accent px-10 z-40 h-screen flex flex-col gap-5 text-secondary text-md">
        
        <ul className='mt-40 flex flex-col gap-5'>
            <li>Hero</li>
            <li>About</li>
            <li>Services</li>
            <li>Choice</li>
            <li>Contact</li>
        </ul>
        <ul className='flex gap-2'>
            <BiLogoFacebook size={20}/>
            <BiLogoInstagram size={20}/>
            <BiLogoTwitter size={20}/>
        </ul>
    </motion.div>
  )
}

export default SideBar