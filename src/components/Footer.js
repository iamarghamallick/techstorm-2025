import { actor, inter, righteous } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#01002A] px-4 pt-20 pb-2'>
            <div className='container mx-auto flex flex-col md:flex-row gap-12 md:gap-2 justify-between items-center md:items-start border-b pb-8'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className={`${righteous.className} text-4xl leading-none`}>TechStorm</h1>
                    <h1 className={`${righteous.className} text-[5.75rem] leading-none`}>2.25</h1>
                </div>

                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Events</h1>
                    <Link href='/' className='text-[#A4A4A4] underline underline-offset-2'>Creative</Link>
                    <Link href='/' className='text-[#A4A4A4] underline underline-offset-2'>Games</Link>
                    <Link href='/' className='text-[#A4A4A4] underline underline-offset-2'>Rovers</Link>
                    <Link href='/' className='text-[#A4A4A4] underline underline-offset-2'>Brain Teaser</Link>
                    <Link href='/' className='text-[#A4A4A4] underline underline-offset-2'>Technicals</Link>
                </div>
                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Member Details</h1>
                    <Link href='/' className='text-[#A4A4A4] underline underline-offset-2'>Faculty Coordinators</Link>
                    <Link href='/' className='text-[#A4A4A4] underline underline-offset-2'>Core Members</Link>
                    <Link href='/' className='text-[#A4A4A4] underline underline-offset-2'>Coordinators</Link>
                    <Link href='/' className='text-[#A4A4A4] underline underline-offset-2'>Volunteers</Link>
                </div>
                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Connect with us</h1>
                    <div className="flex gap-4">
                        <Link href='/'><Image src="/assets/socials/facebook.svg" alt="Facebook" width={30} height={30} className='w-12 h-12' /></Link>
                        <Link href='/'><Image src="/assets/socials/instagram.svg" alt="Facebook" width={30} height={30} className='w-12 h-12' /></Link>
                        <Link href='/'><Image src="/assets/socials/twitter.svg" alt="Facebook" width={30} height={30} className='w-12 h-12' /></Link>
                    </div>
                </div>
            </div>

            <p className={`${inter.className} my-6 text-xl text-center`}>Techstorm &copy; 2025</p>
        </footer>
    )
}

export default Footer