import { righteous } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='sticky top-0 p-2 py-4'>
            <div className="container mx-auto flex justify-between items-center h-16">
                <div className="logo-container flex gap-4 w-52">
                    <Image src='/assets/logo/bppimt-logo.png' alt='bppimt' width={58} height={58} />
                    <Image src='/assets/logo/abhiyantran-logo.png' alt='abhiyantran' width={58} height={58} />
                    <Image src='/assets/logo/techstorm-logo.png' alt='techstorm' width={58} height={58} />
                </div>

                <nav className={`navlinks-container flex justify-around gap-8 border-2 border-gray-500 rounded-3xl p-4 px-8 ${righteous.className} leading-8 w-[calc(100%-256px)]`}>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Events</Link>
                    <Link href='/'>Sponsors</Link>
                    <Link href='/'>Gallery</Link>
                    <Link href='/'>Schedule</Link>
                    <Link href='/'>Team</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header