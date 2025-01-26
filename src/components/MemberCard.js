"use client";

import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiLinkedin } from "react-icons/fi";

const MemberCard = ({ name, position, image, bgcolor, linkedin }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`group relative flex flex-col justify-between items-center m-auto w-72 h-80 p-6 rounded-xl bg-[#171717] my-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
        >
            {/* Image Container */}
            <div
                className="w-full aspect-square rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
                style={{ backgroundColor: bgcolor }}
            >
                <Image
                    src={image}
                    width={300}
                    height={300}
                    alt={"Pic of " + name}
                    className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* LinkedIn Button */}
                <Link
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                    style={{
                        backgroundColor: bgcolor,
                        boxShadow: `0 0 10px ${bgcolor}, 0 0 20px ${bgcolor}, 0 0 30px ${bgcolor}`,
                    }}
                >
                    <FiLinkedin color="blue" size={20} />
                </Link>
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center items-center">
                <h2
                    className={`${righteous.className} text-2xl text-white transition-transform duration-300 group-hover:translate-y-1 group-hover:scale-110`}
                >
                    {name}
                </h2>
                <p
                    className={`${righteous.className} text-xs text-gray-400 transition-opacity duration-300 group-hover:opacity-80`}
                >
                    {position}
                </p>
            </div>
        </motion.div>
    )
}

export default MemberCard