"use client";
import React, { useEffect, useState } from 'react'
import { events } from "@/lib/events";
import { useRouter } from 'next/navigation';
import EventCategoryCard from './EventCategoryCard';
import EventCard from './EventCard';
import { allEvents } from '@/lib/event-details/all-events';
import Link from 'next/link';
import { toLinkText } from '@/utils/toLinkText';

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

    return (
        <div className="container">
            {isValidSlug && currEvents && <div className="">
                <EventCategoryCard title={currEvents.title} icon={currEvents.icon} image={currEvents.image} />
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-8'>
                    {currEvents.eventNames.map((card) => {
                        const event = allEvents.get(card);
                        if (!event) {
                            console.error(`Event not found for card: ${card}`);
                            return null;
                        }
                        return (
                            <Link key={card} href={"/eventdetails/" + toLinkText(event.title)} className='m-auto'>
                                <EventCard
                                    title={event.title}
                                    icon={event.icon}
                                    image={event.bgImage}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>}
        </div >
    )
}

export default EventCategorySlug