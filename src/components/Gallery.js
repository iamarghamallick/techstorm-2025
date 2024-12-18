import { righteous } from '@/app/fonts';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoLinkExternal } from "react-icons/go";

const Gallery = () => {
    return (
        <div className='p-2 py-8 my-8 flex flex-col md:flex-row gap-4 justify-center items-center md:h-[530px] relative'>

            {/* bg effects: styled in /src/app/globals.css  */}
            {/* top center  */}
            <div className="home-bg-gallery-top md:hidden"></div>

            <div className='w-full md:w-2/5 md:h-full'>
                <Image src='/assets/gallery/DSC_0307.JPG' alt='gallery-image-1' width={4928} height={3264} className='grayscale w-full h-full object-cover rounded-lg aspect-square' />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 w-full md:w-[25%] md:h-full">
                <Image src='/assets/gallery/IMG_8253.JPG' alt='gallery-image-2' width={4928} height={3264} className='grayscale w-full h-full object-cover rounded-lg aspect-square' />
                <Image src='/assets/gallery/IMG_7990.JPG' alt='gallery-image-3' width={4928} height={3264} className='grayscale w-full h-full object-cover rounded-lg aspect-square' />
            </div>

            <div className="md:grid md:grid-rows-3 gap-4 w-full md:w-[35%] md:h-full">
                <Image src='/assets/gallery/IMG_8144.JPG' alt='gallery-image-4' width={4928} height={3264} className='hidden md:block row-span-2 grayscale w-full h-full object-cover rounded-lg' />
                <Link href='/gallery' className='flex flex-col justify-center items-center row-span-1 bg-[#262626] rounded-lg py-8 md:py-0'>
                    <div className="flex gap-2 justify-center items-center">
                        <h1 className={`${righteous.className} text-3xl text-[#00FFBB] `}>GALLERY</h1>
                        <GoLinkExternal color='#00FFBB' size={30} />
                    </div>
                    <p className={`${righteous.className} text-[#808080] text-center px-8 md:px-20 leading-none`}>Click to view glimpses from TechStorm 2.24</p>
                </Link>
            </div>
        </div>
    )
}

export default Gallery