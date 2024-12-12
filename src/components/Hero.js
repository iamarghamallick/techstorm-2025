import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='p-2 px-24 min-h-screen flex flex-col justify-center items-center'>
            <div className='grid grid-cols-9 gap-4 justify-center items-center'>
                <Image src='/assets/hero/techstorm.svg' alt='techstorm' width={1217} height={187} className='w-full col-span-9 align-middle' />

                <Image src='/assets/hero/DSC_0219.jpg' alt='hero-img' width={6000} height={4000} className='col-span-7 rounded-3xl grayscale h-44 object-cover' />
                <Image src='/assets/hero/25.svg' alt='25' width={334} height={176} className='col-span-2' />

                <Image src='/assets/vector/asterisk.svg' alt='asterisk' width={280} height={157} className='col-span-3 h-56' />
                <p className={`${righteous.className} col-span-6 text-2xl text-[#BEBEBE]`}>Discover the essence of innovation at <span className='bg-[#AF52DE] text-black rounded-2xl py-1 px-2 capitalize font-ribes'>TECHSTORM 2.25</span>, the pinnacle of te chnological brilliance. As the flagship technical fest of B. P. Poddar Institute of Management and Technology, TECHSTORM has been a beacon of inspiration for the technical community for over a decade. In 2024, brace yourself for the grand celebration of its 11th edition, promising an experience that transcends boundaries and ignites the spirit of innovation on an unprecedented scale.</p>
            </div>
        </div>
    )
}

export default Hero