import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import Ribbon from './Ribbon'

const Hero = () => {
    return (
        <div className='relative p-2 min-h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-4 md:gap-8 justify-center items-center pb-12'>
                <Image src='/assets/hero/techstorm.svg' alt='techstorm' width={1217} height={187} className='w-full' style={{
                    mixBlendMode: 'color-dodge',
                    filter: 'drop-shadow(2px 3px 2px white)'
                }} />

                <div className="flex w-full items-center">
                    <Image src='/assets/hero/25.svg' alt='25' width={334} height={176} className='w-5/12 md:w-3/12' style={{
                        mixBlendMode: 'color-dodge',
                        filter: 'drop-shadow(2px 3px 2px white)'
                    }} />
                </div>

                <div className="flex items-center">
                    <p className={`${righteous.className} w-11/12 md:w-9/12 text-balance text-base md:text-lg text-[#BEBEBE] leading-tight md:leading-normal`}>Step into the future with <span className='bg-[#AF52DE] text-black rounded-2xl md:py-1 px-2 capitalize font-ribes'>TECHSTORM 2.25</span> the flagship technical fest of B. P. Poddar Institute of Management and Technology, inspired by the limitless potential of the metaverse. Celebrating its 11th edition in 2024, TECHSTORM transcends boundaries, blending innovation and virtual realms to ignite the spirit of technological brilliance like never before.</p>
                </div>
            </div>

            <div className='absolute -bottom-12'>
                <Ribbon />
            </div>
        </div>
    )
}

export default Hero