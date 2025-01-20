"use client";

import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'

const MemberCard = ({ name, position, image, bgcolor }) => {
    return (
        <div className={`flex flex-col justify-between items-center m-auto w-72 h-80 p-6 rounded-xl bg-[#171717] my-4`}>
            <div className="w-full aspect-square rounded-xl flex items-center justify-center" style={{ backgroundColor: bgcolor }}>
                <Image
                    src={image}
                    width={300}
                    height={300}
                    alt={"Pic of " + name}
                    className="rounded-xl object-cover"
                />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className={`${righteous.className} text-2xl`}>{name}</h2>
                <p className={`${righteous.className} text-xs`}>{position}</p>
            </div>
        </div>
    )
}

export default MemberCard