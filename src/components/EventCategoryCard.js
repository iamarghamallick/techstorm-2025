import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventCategoryCard = ({ title, icon, image }) => {
    return (
        <Link href={"/events/" + title.toLowerCase().replace(/\s+/g, '')} className="w-full h-60 md:h-96 shadow-lg overflow-hidden relative rounded-lg block">
            <Image
                src={image}
                alt={title}
                width={3000}
                height={4000}
                className="w-full h-full object-cover rounded-lg"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent"></div>

            <div className="absolute inset-0 w-full flex flex-col justify-center items-end p-4">
                <div className="flex flex-col w-1/2 md:w-1/3 justify-center items-center gap-4 md:gap-8">
                    <Image src={icon} alt={title} width={100} height={100} className='md:w-44 md:h-44' />
                    <p className="font-ribes text-4xl md:text-6xl font-semibold text-white text-center">{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default EventCategoryCard