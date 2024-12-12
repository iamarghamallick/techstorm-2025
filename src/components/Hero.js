import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='p-2 min-h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-4 md:gap-8 justify-center items-center'>
                <Image src='/assets/hero/techstorm.svg' alt='techstorm' width={1217} height={187} className='w-full' />

                <div className="flex gap-2 w-full justify-center items-center">
                    <Image src='/assets/hero/DSC_0219.jpg' alt='hero-img' width={6000} height={4000} className='w-3/5 rounded-3xl grayscale h-[6rem] md:h-[16rem] object-cover' />
                    <Image src='/assets/hero/25.svg' alt='25' width={334} height={176} className='w-2/5 h-[6rem] md:h-[16rem]' />
                </div>

                <div className="flex flex-col md:flex-row gap-2 w-full justify-center items-center">
                    <Image src='/assets/vector/asterisk.svg' alt='asterisk' width={280} height={157} className='w-[200px] md:w-2/5 md:p-8' />
                    <p className={`${righteous.className} md:w-3/5 text-center md:text-left text-xl md:text-2xl text-[#BEBEBE]`}>Discover the essence of innovation at <span className='bg-[#AF52DE] text-black rounded-2xl py-1 px-2 capitalize font-ribes'>TECHSTORM 2.25</span>, the pinnacle of te chnological brilliance. As the flagship technical fest of B. P. Poddar Institute of Management and Technology, TECHSTORM has been a beacon of inspiration for the technical community for over a decade. In 2024, brace yourself for the grand celebration of its 11th edition, promising an experience that transcends boundaries and ignites the spirit of innovation on an unprecedented scale.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero