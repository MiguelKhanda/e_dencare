'use client'
import Image from "next/image"
import Button from "./Button"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
const Hero = () => {
    const MotionImage = motion.create(Image)
  return (
    <section className="[background:radial-gradient(125%_125%_at_50%_10%,#252627_55%,#6BD425_100%)] flex items-center h-screen">
        <Navbar/>
        <motion.video
            initial={{x:-2000}}
            animate={{x:0}}
            transition={{duration:1, delay:2}}
            autoPlay
            loop
            muted
            playsInline
            onContextMenu={(e) => e.preventDefault()}
            className='w-full h-screen object-cover opacity-20 z-10 absolute'
        >
            <source src = '/videos/Bg-Video.webm' type='video/webm'/>
        </motion.video>
        <div className="flex items-center flex-col text-light w-[90%] mx-auto  top-0">
            <motion.h1 
            initial={{y:-10, scale:0}}
            animate={{y:0, scale:1}}
            transition={{duration:2,}}
            className="mt-20 text-light text-xl"><span className=" text-primary">
                Eden</span>Care
            </motion.h1>
            <MotionImage
                initial={{y:-10, scale:0}}
                animate={{y:0, scale:1}}
                transition={{duration:2, ease:'easeInOut'}}
                src= '/images/background_home.svg'
                width={20}
                height={20}
                alt='Ilustration'
                className="w-50 mb-5 shadow-2xl shadow-accent rounded-full px-2 py-2"
                loading="eager"
            />
            <motion.p 
            initial={{y:30, scale:0}}
            animate={{y:0, scale:1}}
            transition={{duration:2}}
            className="text-center text-md bg-linear-to-r from-light to-primary bg-clip-text text-transparent md:text-xl">
                EdenCare is a bridge. Education, the environment, agriculture, weather, and society. All in one place. 
            </motion.p>
            <Button text='Consult' className='hover:bg-accent'/>
        </div>
    </section>
)
}

export default Hero