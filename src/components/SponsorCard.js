import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'

const SponsorCard = ({ title, image, category }) => {
    return (
        <div className="flex flex-col justify-between items-center m-auto w-80 h-96 p-6 rounded-xl bg-[#171717] my-4">
            <Image src={image} width={300} height={300} alt={title + "Logo"} className="w-full aspect-square rounded-xl object-cover" />
            <div className="flex flex-col justify-center items-center">
                <h2 className={`${righteous.className} text-2xl`}>{title}</h2>
                <p className={`${righteous.className} text-xs`}>{category + " Sponsor"}</p>
            </div>
        </div>
    )
}

export default SponsorCard