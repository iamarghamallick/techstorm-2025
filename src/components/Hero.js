import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import Ribbon from './Ribbon'
import StarsBackground from './StarsBackground'

const Hero = () => {
    return (
        <div className='relative p-2 min-h-screen flex flex-col justify-center items-center bg-[url("/assets/hero/meta_girl.png")] bg-no-repeat bg-center md:bg-[position:120%_center] bg-[size:auto_100%]'>
            <StarsBackground />
            <div className='flex flex-col gap-4 md:gap-8 justify-center items-center pb-12'>
                <Image src='/assets/hero/techstorm.svg' alt='techstorm' width={1217} height={187} className='w-full' />

                <div className="flex w-full items-center">
                    <Image src='/assets/hero/25.svg' alt='25' width={334} height={176} className='w-5/12 md:w-3/12' />
                </div>

                <div className="flex items-center">
                    <p className={`${righteous.className} w-11/12 md:w-9/12 text-balance text-xl md:text-2xl text-[#BEBEBE] leading-tight md:leading-normal`}>Discover the essence of innovation at <span className='bg-[#AF52DE] text-black rounded-2xl md:py-1 px-2 capitalize font-ribes'>TECHSTORM 2.25</span>, the pinnacle of te chnological brilliance. As the flagship technical fest of B. P. Poddar Institute of Management and Technology, TECHSTORM has been a beacon of inspiration for the technical community for over a decade. In 2024, brace yourself for the grand celebration of its 11th edition, promising an experience that transcends boundaries and ignites the spirit of innovation on an unprecedented scale.</p>
                </div>
            </div>

            <div className='absolute -bottom-12 mb-12'>
                <Ribbon />
            </div>
        </div>
    )
}

export default Hero