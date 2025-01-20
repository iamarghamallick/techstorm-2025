"use client"
import { poppins, righteous } from '@/app/fonts';
import { allEvents } from '@/lib/event-details/all-events';
import { eventTitles } from '@/lib/event-titles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SingleEventSlug = ({ slug }) => {
    const router = useRouter();

    const validSingleEvent = eventTitles.reduce((map, event, index) => {
        map.set(event.toLowerCase().replace(/\s+/g, ''), index);
        return map;
    }, new Map());

    const [isValidSlug, setIsValidSlug] = useState(false);
    const [currEvent, setCurrEvent] = useState(null);

    useEffect(() => {
        if (!validSingleEvent.has(slug)) {
            router.push("/404");
        } else {
            setCurrEvent(allEvents.get(slug));
            setIsValidSlug(true);
        }
    }, []);

    return (
        <div className='container'>
            {isValidSlug && currEvent && <div>
                <div className='flex gap-8'>
                    <div className="w-1/3 relative">
                        <Image
                            src={currEvent.bgImage}
                            alt={currEvent.title + " pic"}
                            width={400}
                            height={300}
                            className="w-full rounded-tl-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-[#1e1336] to-transparent rounded-tl-3xl"></div>
                    </div>
                    <div className="w-2/3 flex flex-col gap-4">
                        <h1 className={`${righteous.className} text-4xl font-bold`}>{currEvent.title}</h1>
                        <p className={`${poppins.className} text-lg`}>{currEvent.description}</p>
                        <Link href={currEvent.registrationLink} target="_blank" className={`${poppins.className} w-full text-center uppercase bg-[#202020] rounded-lg text-green-300 font-semibold text-xl p-4 border border-green-300`}>Register Now!</Link>
                    </div>
                </div>

                <div className='flex gap-8 my-10'>
                    <div className="w-1/3 flex flex-col gap-6 justify-center items-center">
                        {[
                            {
                                heading: "Prize",
                                text: currEvent.prize,
                                desc: ["", ""],
                                image: "/assets/eventdetails-icons/prizes.png",
                            },
                            {
                                heading: "Registration Fees for BPPIMT Students",
                                text: currEvent.bppimtRegFees,
                                desc: ["", ""],
                                image: "/assets/eventdetails-icons/bppimt-logo.png",
                            },
                            {
                                heading: "Registration Fees for OUTSIDE Students",
                                text: currEvent.outsideRegFees,
                                desc: ["", ""],
                                image: "/assets/eventdetails-icons/avater.png",
                            },
                            {
                                heading: "On-spot registration",
                                text: currEvent.onspotReg,
                                desc: ["", ""],
                                image: "/assets/eventdetails-icons/on-spot.png",
                            },
                            {
                                heading: "Date of Prelims",
                                text: currEvent.prelimsDate,
                                desc: currEvent.prelimsTiming || ["", ""],
                                image: "/assets/eventdetails-icons/prelims.png",
                            },
                            {
                                heading: "Date of Finals",
                                text: currEvent.finalsDate,
                                desc: currEvent.finalsTiming || ["", ""],
                                image: "/assets/eventdetails-icons/finals.png",
                            },
                        ].map((item, index) => (
                            <div key={index} className="details-box w-full flex justify-between items-end p-2 rounded-lg bg-[#202020c4] h-36">
                                <div className='w-2/3 flex flex-col pl-2 justify-end'>
                                    <p className={`${poppins.className} font-semibold`}>{item.heading}</p>
                                    <h1 className={`${poppins.className} font-bold text-4xl text-[#7C7C7C]`}>{item.text}</h1>
                                    <p className={`${poppins.className} font-semibold text-xs text-[#A4A4A4]`}>{item.desc[0]}</p>
                                    <p className={`${poppins.className} font-semibold text-xs text-[#A4A4A4]`}>{item.desc[1]}</p>
                                </div>
                                <div className='w-1/3'>
                                    <Image src={item.image} width={100} height={200} alt='icon' className='h-36 w-auto' />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-2/3 pl-12">
                        <h1 className={`${poppins.className} font-bold text-4xl py-4`}>Rules and Regulations</h1>
                        <div className='flex flex-col gap-4'>
                            {currEvent.rules.map((rule, index) => (
                                <p key={index} className={`${poppins.className} text-lg`}>&bull; {rule}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default SingleEventSlug