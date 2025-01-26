import Image from 'next/image'
import React from 'react'

const EventCard = ({ title, icon, image }) => {
    return (
        <div className="group min-w-[300px] max-w-[300px] h-[400px] shadow-lg overflow-hidden relative rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
                src={image}
                alt={title}
                width={3000}
                height={4000}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300 rounded-lg"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:from-gray-900 group-hover:via-black"></div>

            <div className="absolute bottom-0 left-0 w-full flex flex-col items-center p-4">
                <Image
                    src={icon}
                    alt={title}
                    width={70}
                    height={70}
                    className="transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="font-ribes text-6xl font-semibold text-white mt-2 text-center transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-1">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default EventCard