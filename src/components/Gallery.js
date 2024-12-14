import { righteous } from '@/app/fonts';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoLinkExternal } from "react-icons/go";

const Gallery = () => {
    return (
        <div className='p-2 py-8 my-8 flex gap-4 justify-center items-center h-[530px]'>
            <div className='w-2/5 h-full'>
                <Image src='/assets/gallery/DSC_0307.jpg' alt='gallery-image-1' width={4928} height={3264} className='grayscale w-full h-full object-cover rounded-lg' />
            </div>

            <div className="grid grid-rows-2 gap-4 w-[25%] h-full">
                <Image src='/assets/gallery/IMG_8253.jpg' alt='gallery-image-2' width={4928} height={3264} className='grayscale w-full h-full object-cover rounded-lg' />
                <Image src='/assets/gallery/IMG_7990.jpg' alt='gallery-image-3' width={4928} height={3264} className='grayscale w-full h-full object-cover rounded-lg' />
            </div>

            <div className="grid grid-rows-3 gap-4 w-[35%] h-full">
                <Image src='/assets/gallery/IMG_8144.jpg' alt='gallery-image-4' width={4928} height={3264} className='row-span-2 grayscale w-full h-full object-cover rounded-lg' />
                <Link href='/gallery' className='flex flex-col justify-center items-center row-span-1 bg-[#262626] rounded-lg'>
                    <div className="flex gap-4 justify-center items-center">
                        <h1 className={`${righteous.className} text-3xl text-[#00FFBB] `}>GALLERY</h1>
                        <GoLinkExternal color='#00FFBB' size={30} />
                    </div>
                    <p className={`${righteous.className} text-[#808080] text-center px-20 leading-none`}>Click to view glimpses from TechStorm 2.24</p>
                </Link>
            </div>
        </div>
    )
}

export default Gallery