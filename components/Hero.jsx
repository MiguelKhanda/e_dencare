'use client'
import Image from "next/image"
import Button from "./Button"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
const Hero = () => {
    const MotionImage = motion.create(Image)
  return (
    <section className=" bg-dark flex items-center justify-center">
        <Navbar/>
        <div className="flex items-center flex-col text-light w-[90%] mx-auto h-screen top-0">
            <motion.h1 
            initial={{y:-100, scale:0}}
            animate={{y:0, scale:1}}
            transition={{duration:2,}}
            className="mt-40 text-light text-4xl"><span className=" text-primary">
                Eden</span>Care
            </motion.h1>
            <MotionImage
                initial={{y:-100, scale:0}}
                animate={{y:0, scale:1}}
                transition={{duration:2, ease:'easeInOut'}}
                src= '/images/background_home.svg'
                width={40}
                height={40}
                alt='Ilustration'
                className="w-90 mb-15 shadow-2xl shadow-accent rounded-full px-2 py-5"
                loading="eager"
            />
            <motion.p 
            initial={{y:30, scale:0}}
            animate={{y:0, scale:1}}
            transition={{duration:2}}
            className="text-center text-xl bg-linear-to-r from-light to-primary bg-clip-text text-transparent">
                EdenCare is a bridge. Education, the environment, agriculture, weather, and society. All in one place. 
            </motion.p>
            <Button text='Consult'/>
        </div>
    </section>
)
}

export default Hero