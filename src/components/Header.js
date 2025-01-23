"use client"
import { righteous } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from 'react-icons/rx';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={`sticky top-0 p-2 md:px-24 md:py-4 backdrop-blur-xl ${isOpen ? "bg-[#1E1336]" : ""} shadow-md transition-colors duration-500 ease-in-out z-30`}>
            <div className="container mx-auto flex justify-between items-center h-11 md:h-16">
                <div className="logo-container flex gap-4">
                    <Image src='/assets/logo/bppimt-logo.png' alt='bppimt' width={600} height={600} className='w-8 h-8 md:w-14 md:h-14' />
                    <Image src='/assets/logo/abhiyantran-logo.png' alt='abhiyantran' width={600} height={600} className='w-8 h-8 md:w-14 md:h-14' />
                    <Link onClick={() => setIsOpen(false)} href="/"><Image src='/assets/logo/techstorm-logo.png' alt='techstorm' width={600} height={600} className='w-8 h-8 md:w-14 md:h-14' /></Link>
                </div>

                <div className={`hidden md:flex navlinks-container justify-around gap-8 border-2 border-[#7C7C7C] rounded-3xl p-4 px-8 ${righteous.className} leading-8 bg-[#202020] shadow-bottom-right`}>
                    <Link href='/' className='text-lg'>Home</Link>
                    <Link href='/events' className='text-lg'>Events</Link>
                    <Link href='/sponsors' className='text-lg'>Sponsors</Link>
                    <Link href='/gallery' className='text-lg'>Gallery</Link>
                    <Link href='/schedule' className='text-lg'>Schedule</Link>
                    <Link href='/team' className='text-lg'>Team</Link>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                    {isOpen ? <RxCross1 size={30} /> : <GiHamburgerMenu size={30} />}
                </button>
            </div>

            {/* navbar for small screen devices */}
            <nav className={`overflow-hidden fixed top-14 left-0 w-full bg-[#1E1336] flex flex-col md:hidden justify-center items-center gap-4 p-4 ${righteous.className} leading-8 transition-all duration-500 ease-in-out ${isOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
                <Link onClick={() => setIsOpen(!isOpen)} href='/' className='text-lg'>Home</Link>
                <Link onClick={() => setIsOpen(!isOpen)} href='/events' className='text-lg'>Events</Link>
                <Link onClick={() => setIsOpen(!isOpen)} href='/sponsors' className='text-lg'>Sponsors</Link>
                <Link onClick={() => setIsOpen(!isOpen)} href='/gallery' className='text-lg'>Gallery</Link>
                <Link onClick={() => setIsOpen(!isOpen)} href='/schedule' className='text-lg'>Schedule</Link>
                <Link onClick={() => setIsOpen(!isOpen)} href='/team' className='text-lg'>Team</Link>
            </nav>
        </header>
    )
}

export default Header