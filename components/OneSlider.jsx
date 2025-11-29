'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import './OneSlider.module.css'

export default function OneSlider({data}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <Slider {...settings}>
                {data.map(({image,id,service,h1}) => (
                     <div 
                        className='flex flex-col min-w-full relative justify-center items-center' key={id }>
                        <div className="mx-[10%] md:mx-[20%]  w-90%">
                            <Image
                                src={image}
                                alt='Choose Us'
                                width={500}
                                height={500}
                                className='h-80 object-center mt-10 flex self-center md:h-100'
                            />
                        </div>
                        <h1 className='text-center text-secondary mt-10'>{h1}</h1>
                        <p className='text-center'>{service}</p>
                        <div className='self-center'>
                        </div>
                </div>
                ))}
            </Slider>
        </div>
    )
}
