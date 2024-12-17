import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee';

const Ribbon = () => {
    return (
        <Marquee direction="left" loop={0} className="relative h-12 bg-black/80 overflow-hidden">
            {/* Moving Ribbon */}
            <div className="flex justify-center items-center gap-4 h-full animate-scroll whitespace-nowrap">
                {Array.from({ length: 100 }).map((_, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="font-stretchpro text-xl text-white">TEECHSTOORM</div>
                        <Image
                            src="/assets/logo/techstorm-logo.png"
                            alt="techstorm"
                            width={600}
                            height={600}
                            className="w-7 h-7"
                        />
                    </div>
                ))}
            </div>
        </Marquee>
    );
};

export default Ribbon;
