import Image from 'next/image'
import React from 'react'

const Ribbon = () => {
    return (
        <div className="relative h-12 bg-black overflow-hidden">
            {/* Moving Ribbon */}
            <div className="flex justify-center items-center gap-8 h-full animate-scroll whitespace-nowrap">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="font-stretchpro text-xl text-white">TEECHSTOORM</div>
                        <Image
                            src="/assets/logo/techstorm-logo.png"
                            alt="techstorm"
                            width={600}
                            height={600}
                            className="w-7 h-7 mr-4"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ribbon;
