"use client"
import { poppins, righteous } from '@/app/fonts';
import { allEvents } from '@/lib/event-details/all-events';
import { eventTitles } from '@/lib/event-titles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

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
                <div className='flex flex-col md:flex-row gap-2 md:gap-8'>
                    <motion.div
                        initial={{ opacity: 0, y: "100px" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/3 relative"
                    >
                        <Image
                            src={currEvent.bgImage}
                            alt={currEvent.title + " pic"}
                            width={400}
                            height={300}
                            className="w-full rounded-t-3xl md:rounded-tl-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#1e1336] to-transparent rounded-t-3xl md:rounded-tl-3xl"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: "100px" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-2/3 flex flex-col gap-4"
                    >
                        <h1 className={`${righteous.className} text-4xl font-bold`}>{currEvent.title}</h1>
                        <p className={`${poppins.className} text-lg`}>{currEvent.description}</p>
                        <Link
                            href={currEvent.registrationLink}
                            target="_blank"
                            className={`${poppins.className} w-full text-center uppercase bg-[#202020] rounded-lg text-green-300 font-semibold text-xl p-4 border border-green-300 transition-transform transform hover:scale-[1.02] hover:bg-green-300 hover:text-[#202020]`}
                        >
                            Register Now!
                        </Link>
                    </motion.div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 md:gap-8 my-10'>
                    <div className="md:w-1/3 flex flex-col gap-2 md:gap-6 justify-center items-center">
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
                            <motion.div
                                initial={{ opacity: 0, y: "100px" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                key={index}
                                className="details-box w-full flex justify-between items-end p-2 rounded-lg bg-[#202020c4] h-36 group hover:shadow-lg hover:shadow-green-300 transition-all duration-300"
                            >
                                <div className="w-2/3 flex flex-col pl-2 justify-end group-hover:scale-105 group-hover:translate-x-1 transition-transform duration-300">
                                    <p className={`${poppins.className} font-semibold`}>{item.heading}</p>
                                    <h1
                                        className={`${poppins.className} font-bold text-4xl text-[#7C7C7C] group-hover:text-green-300 transition-colors duration-300`}
                                    >
                                        {item.text}
                                    </h1>
                                    <p
                                        className={`${poppins.className} font-semibold text-xs text-[#A4A4A4] group-hover:text-white transition-colors duration-300`}
                                    >
                                        {item.desc[0]}
                                    </p>
                                    <p
                                        className={`${poppins.className} font-semibold text-xs text-[#A4A4A4] group-hover:text-white transition-colors duration-300`}
                                    >
                                        {item.desc[1]}
                                    </p>
                                </div>
                                <div className="w-1/3">
                                    <Image
                                        src={item.image}
                                        width={100}
                                        height={200}
                                        alt="icon"
                                        className="h-36 w-auto group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: "100px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="details-box w-full flex justify-between p-2 rounded-lg bg-[#202020c4] h-36 group hover:shadow-lg hover:shadow-green-400 hover:bg-[#2A2A2A] transition-all duration-300"
                        >
                            <div className="w-full flex flex-col gap-2 group-hover:scale-105 transition-transform duration-300">
                                <h1
                                    className={`${poppins.className} font-bold text-3xl text-[#7C7C7C] group-hover:text-green-300 transition-colors duration-300`}
                                >
                                    Faculty Coordinators
                                </h1>
                                {currEvent.facultyCoordinators.map((coordinator, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex justify-between pl-2 pr-1 group-hover:pl-4 transition-all duration-300"
                                    >
                                        <p
                                            className={`${poppins.className} font-semibold text-sm text-white group-hover:text-green-300 transition-colors duration-300`}
                                        >
                                            {coordinator.name} ({coordinator.dept})
                                        </p>
                                        <p
                                            className={`${poppins.className} font-semibold text-sm text-white group-hover:text-green-300 transition-colors duration-300`}
                                        >
                                            {coordinator.phone}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: "100px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="details-box w-full flex justify-between p-2 rounded-lg bg-[#202020c4] h-36 group hover:shadow-lg hover:shadow-green-400 hover:bg-[#2A2A2A] transition-all duration-300"
                        >
                            <div className="w-full flex flex-col gap-2 group-hover:scale-105 transition-transform duration-300">
                                <h1
                                    className={`${poppins.className} font-bold text-3xl text-[#7C7C7C] group-hover:text-green-300 transition-colors duration-300`}
                                >
                                    Student Coordinators
                                </h1>
                                {currEvent.studentCoordinators.map((coordinator, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex justify-between pl-2 pr-1 group-hover:pl-4 transition-all duration-300"
                                    >
                                        <p
                                            className={`${poppins.className} font-semibold text-sm text-white group-hover:text-green-300 transition-colors duration-300`}
                                        >
                                            {coordinator.name} ({coordinator.dept})
                                        </p>
                                        <p
                                            className={`${poppins.className} font-semibold text-sm text-white group-hover:text-green-300 transition-colors duration-300`}
                                        >
                                            {coordinator.phone}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: "100px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="details-box w-full flex justify-between p-2 rounded-lg bg-[#202020c4] h-36 group hover:shadow-lg hover:shadow-green-400 hover:bg-[#2A2A2A] transition-all duration-300"
                        >
                            <div className="w-full flex flex-col gap-2 group-hover:scale-105 transition-transform duration-300">
                                <h1
                                    className={`${poppins.className} font-bold text-3xl text-[#7C7C7C] group-hover:text-green-300 transition-colors duration-300`}
                                >
                                    Volunteers
                                </h1>
                                {currEvent.volunteers.map((coordinator, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex justify-between pl-2 pr-1 group-hover:pl-4 transition-all duration-300"
                                    >
                                        <p
                                            className={`${poppins.className} font-semibold text-sm text-white group-hover:text-green-300 transition-colors duration-300`}
                                        >
                                            {coordinator.name} ({coordinator.dept})
                                        </p>
                                        <p
                                            className={`${poppins.className} font-semibold text-sm text-white group-hover:text-green-300 transition-colors duration-300`}
                                        >
                                            {coordinator.phone}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:w-2/3">
                        <h1 className={`${poppins.className} font-bold text-4xl py-4`}>Rules and Regulations</h1>
                        <motion.div
                            initial={{ opacity: 0, y: "50px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col gap-2 md:gap-4'
                        >
                            {currEvent.rules.map((rule, index) => (
                                <p key={index} className={`${poppins.className} text-lg`}>&bull; {rule}</p>
                            ))}
                        </motion.div>

                        <h1 className={`${poppins.className} font-bold text-4xl py-4`}>{currEvent.round1}</h1>
                        <motion.div
                            initial={{ opacity: 0, y: "50px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col gap-2 md:gap-4'
                        >
                            {currEvent.round1Details.map((rule, index) => (
                                <p key={index} className={`${poppins.className} text-lg`}>&bull; {rule}</p>
                            ))}
                        </motion.div>

                        <h1 className={`${poppins.className} font-bold text-4xl py-4`}>{currEvent.round2}</h1>
                        <motion.div
                            initial={{ opacity: 0, y: "50px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col gap-2 md:gap-4'
                        >
                            {currEvent.round2Details.map((rule, index) => (
                                <p key={index} className={`${poppins.className} text-lg`}>&bull; {rule}</p>
                            ))}
                        </motion.div>

                        <h1 className={`${poppins.className} font-bold text-4xl py-4`}>{currEvent.round3}</h1>
                        <motion.div
                            initial={{ opacity: 0, y: "50px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col gap-2 md:gap-4'
                        >
                            {currEvent.round3Details.map((rule, index) => (
                                <p key={index} className={`${poppins.className} text-lg`}>&bull; {rule}</p>
                            ))}
                        </motion.div>

                        <h1 className={`${poppins.className} font-bold text-4xl py-4`}>Contacts</h1>
                        <motion.div
                            initial={{ opacity: 0, y: "50px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col gap-2 md:gap-4'
                        >
                            {currEvent.contacts.map((contact, index) => (
                                <div className='flex gap-2' key={index}>
                                    <p className={`${poppins.className} text-lg`}>{contact.name} ({contact.dept})</p>
                                    <p className={`${poppins.className} text-lg`}>{contact.phone}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default SingleEventSlug