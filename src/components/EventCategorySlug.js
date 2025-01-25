"use client";
import React, { useEffect, useState } from 'react'
import { events } from "@/lib/events";
import { useRouter } from 'next/navigation';
import EventCategoryCard from './EventCategoryCard';
import EventCard from './EventCard';
import { allEvents } from '@/lib/event-details/all-events';
import Link from 'next/link';
import { toLinkText } from '@/utils/toLinkText';
import { motion } from 'framer-motion';

const AnimatedLink = motion(Link);

const EventCategorySlug = ({ slug }) => {
    const router = useRouter();

    const validEventCategories = events.reduce((map, event, index) => {
        map.set(event.title.toLowerCase().replace(/\s+/g, ''), index);
        return map;
    }, new Map());

    const [isValidSlug, setIsValidSlug] = useState(false);
    const [currEvents, setCurrEvents] = useState(null);

    useEffect(() => {
        if (!validEventCategories.has(slug)) {
            router.push("/404");
        } else {
            setCurrEvents(events[validEventCategories.get(slug)]);
            setIsValidSlug(true);
        }
        // console.log(allEvents.get("omegatrix"));
    }, [slug]);

    const getMdGridCols = (eventCount) => {
        switch (eventCount) {
            case 1:
                return "md:grid-cols-1";
            case 2:
                return "md:grid-cols-2";
            default:
                return "md:grid-cols-3";
        }
    }

    return (
        <div className="container">
            {isValidSlug && currEvents && <div className="">
                <EventCategoryCard title={currEvents.title} icon={currEvents.icon} image={currEvents.image} />
                <div className={`w-full grid grid-cols-1 ${getMdGridCols(currEvents.eventCount)} gap-4 my-8`}>
                    {currEvents.eventNames.map((card) => {
                        const event = allEvents.get(card);
                        if (!event) {
                            console.error(`Event not found for card: ${card}`);
                            return null;
                        }
                        return (
                            <AnimatedLink
                                initial={{ opacity: 0, y: "100px" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                key={card}
                                href={"/eventdetails/" + toLinkText(event.title)}
                                className='m-auto'
                            >
                                <EventCard
                                    title={event.title}
                                    icon={event.icon}
                                    image={event.bgImage}
                                />
                            </AnimatedLink>
                        );
                    })}
                </div>
            </div>}
        </div >
    )
}

export default EventCategorySlug