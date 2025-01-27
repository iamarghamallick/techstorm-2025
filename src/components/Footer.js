import { actor, inter, righteous } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#01002A] px-4 pt-20 pb-2'>
            <div className='container mx-auto flex flex-col md:flex-row gap-12 md:gap-2 justify-between items-center md:items-start border-b pb-8'>
                <Link href="/" className='flex flex-col justify-center items-center'>
                    <h1 className={`${righteous.className} text-4xl leading-none`}>TechStorm</h1>
                    <h1 className={`${righteous.className} text-[5.75rem] leading-none`}>2.25</h1>
                </Link>

                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Events</h1>
                    <Link href='/events/brainteasers' className='text-[#A4A4A4] underline underline-offset-2'>Brain Teasers</Link>
                    <Link href='/events/technicals' className='text-[#A4A4A4] underline underline-offset-2'>Technicals</Link>
                    <Link href='/events/rovers' className='text-[#A4A4A4] underline underline-offset-2'>Rovers</Link>
                    <Link href='/events/games' className='text-[#A4A4A4] underline underline-offset-2'>Games</Link>
                    <Link href='/events/creative' className='text-[#A4A4A4] underline underline-offset-2'>Creative</Link>
                </div>

                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Member Details</h1>
                    <Link href='/team/faculty' className='text-[#A4A4A4] underline underline-offset-2'>Faculty Coordinators</Link>
                    <Link href='/team' className='text-[#A4A4A4] underline underline-offset-2'>Core Members</Link>
                    <Link href='/team/student' className='text-[#A4A4A4] underline underline-offset-2'>Student Coordinators</Link>
                    <Link href='/team/volunteer' className='text-[#A4A4A4] underline underline-offset-2'>Volunteers</Link>
                </div>

                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Connect with us</h1>
                    <div className="flex gap-4">
                        <Link href='https://www.facebook.com/techstorm2.23' target="_blank">
                            <Image src="/assets/socials/facebook.svg" alt="Facebook" width={30} height={30} className='w-12 h-12' />
                        </Link>
                        <Link href='https://www.instagram.com/techstorm_2.25/' target="_blank">
                            <Image src="/assets/socials/instagram.svg" alt="Instagram" width={30} height={30} className='w-12 h-12' />
                        </Link>
                        <Link href='https://x.com/techstorm25/' target="_blank">
                            <Image src="/assets/socials/x.svg" alt="X" width={30} height={30} className='w-12 h-12 invert' />
                        </Link>
                    </div>
                </div>
            </div>

            <p className={`${inter.className} my-6 text-xl text-center`}>Techstorm &copy; 2025</p>
        </footer>
    )
}

export default Footer