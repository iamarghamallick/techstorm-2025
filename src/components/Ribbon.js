import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Ribbon = () => {
    return (
        <Marquee direction="left" speed={50} gradient={false} pauseOnHover={true} loop={0} className="relative h-12 bg-black/80">
            {/* Moving Ribbon */}
            <div className="flex items-center gap-4 whitespace-nowrap">
                {/* Repeating content */}
                {[...Array(10)].map((_, index) => (
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
