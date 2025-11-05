import React from 'react'
import { choice_Data } from './db'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const ChoiceSlider = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Image
            src={choice_Data[0].image}
            width={600}
            height={600}
            alt='Why choose us'
            className='w-[80%] relative mt-30 '
        />
        <FaArrowLeft className='absolute left-0'/>
        <FaArrowRight className='absolute right-0'/>
        <h1 className='mt-8 text-center text-primary'>{choice_Data[0].service}</h1>
    </div>
  )
}

export default ChoiceSlider