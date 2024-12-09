import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='container mx-auto px-16 py-2'>
            <h1 className={`${righteous.className} text-center text-[235px] leading-none w-full text-[#BEBEBE]`}>TechStorm</h1>
            <div className='flex gap-4 justify-center items-center'>
                <Image src='/assets/hero/DSC_0219.jpg' alt='hero-img' width={870} height={206} className='h-52 w-[810px] rounded-3xl object-cover grayscale' />
                <h2 className={`${righteous.className} text-[235px] leading-none text-[#BEBEBE]`}>&#8216;25</h2>
            </div>
            <div className='flex gap-4 justify-center items-center py-4'>
                <Image src='/assets/vector/asterisk-green.svg' alt='asterisk' width={157} height={157} />
                <Image src='/assets/vector/asterisk-blue.svg' alt='asterisk' width={157} height={157} className='relative right-14' />
                <p className={`${righteous.className} text-2xl text-[#BEBEBE]`}>Discover the essence of innovation at <span className='bg-[#AF52DE] text-black rounded-2xl py-1 px-2 capitalize font-ribes'>TECHSTORM 2.25</span>, the pinnacle of te chnological brilliance. As the flagship technical fest of B. P. Poddar Institute of Management and Technology, TECHSTORM has been a beacon of inspiration for the technical community for over a decade. In 2024, brace yourself for the grand celebration of its 11th edition, promising an experience that transcends boundaries and ignites the spirit of innovation on an unprecedented scale.</p>
            </div>
        </div>
    )
}

export default Hero