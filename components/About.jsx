'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Button from "./Button"


const About = () => {
  return (
    <div className="h-screen bg-dark -z-10 flex flex-col  items-center mb-20 relative ">
      <Image 
       alt="background"
       src='/images/about-bg.jpg'
       fill
       className="object-cover -z-50 opacity-10 inset-0"
       priority
      />
      <h1 className="text-primary text-2xl text-center mt-8">About Us</h1>
      <motion.div
        initial={{opacity:0,y:400}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:4,ease:'easeOut'}}
       className="w-[90%] mx-auto tracking-wide z-20 mt-40 md:text-xl bg-linear-to-r from-light to-secondary text-transparent via-primary bg-clip-text">
        <p>
          <span className="text-secondary">EdenCare Consultants </span>is a premier consulting firm that delivers comprehensive and innovative solutions
          across multiple sectors.
        </p>
        <p>
          Our team comprises seasoned experts with extensive experience in research,
          policy analysis, community engagement, environmental assessments, soil and water conservation and
          sustainable development.
        </p>
        <p>
          We strive to empower communities, influence policy, and promote sustainable
          practices through our tailored services.
        </p>
        <Button text={'More on Us'}/>

      </motion.div>
    </div>
  )
}

export default About