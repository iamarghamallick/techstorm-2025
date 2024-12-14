import Image from 'next/image'
import React from 'react'

const EventCard = ({ title, icon, image }) => {
    return (
        <div className="min-w-[300px] max-w-[300px] shadow-lg overflow-hidden relative">
            <Image
                src={image}
                alt={title}
                width={3000}
                height={4000}
                className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full flex flex-col items-center p-4">
                <Image src={icon} alt={title} width={70} height={70} />
                <h3 className="font-ribes text-6xl font-semibold text-white mt-2">{title}</h3>
            </div>
        </div>
    )
}

export default EventCard