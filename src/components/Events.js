"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EventCard from "./EventCard";
import { events } from "@/lib/events";

const Events = () => {
    const sliderRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const scroll = (direction) => {
        const container = sliderRef.current;
        const scrollAmount = container.clientWidth * 0.8;
        const newScrollPosition =
            direction === "left"
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: newScrollPosition,
            behavior: "smooth"
        });
    };

    const handleScroll = () => {
        const container = sliderRef.current;
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(
            container.scrollLeft < container.scrollWidth - container.clientWidth
        );
    };

    useEffect(() => {
        const container = sliderRef.current;
        container.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            <div className="home-bg-red-top"></div>
            <div className="home-bg-red-bottom"></div>

            <h1 className="font-ribes text-5xl my-8 pl-2">Events</h1>
            <div className="relative max-w-7xl mx-auto px-4 py-8">
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {events.map((card) => (
                        <EventCard key={card.id} {...card} />
                    ))}
                </div>

                {showLeftButton && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 p-3 rounded-full shadow-lg hover:bg-white/50 transition-colors duration-300 border-2 border-white"
                        aria-label="Scroll left"
                    >
                        <FaChevronLeft className="text-white text-4xl" />
                    </button>
                )}

                {showRightButton && (
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30 p-3 rounded-full shadow-lg hover:bg-white/50 transition-colors duration-300 border-2 border-white"
                        aria-label="Scroll right"
                    >
                        <FaChevronRight className="text-white text-4xl" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Events;