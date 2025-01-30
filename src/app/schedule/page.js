import { poppins, righteous } from "../fonts";
import { day1, day2, day3 } from "@/lib/schedule";

export default function Schedule() {
    return (
        <main className="mt-16 md:mt-24 schedule-container min-h-screen flex justify-center p-2 md:p-8 py-8">
            <div className="container px-2 md:px-20">
                <h1 className={`${poppins.className} mb-8 md:mb-0 text-center text-2xl font-bold`}>Schedule</h1>
                <h1 className={`${poppins.className} text-center text-xl font-semibold text-gray-300 my-48`}>Coming Soon</h1>

                {/* Day 1 : 20th March 2025 */}
                {/* <div className="day">
                    <h2 className={`${poppins.className} text-2xl text-white font-bold my-4`}>20th March</h2>
                    <div className="schedule-heading">
                        <div className="schedule-item grid grid-cols-3 gap-4 p-2 md:p-4 bg-gray-700 rounded-t-lg">
                            <div className={`${righteous.className} m-auto timing font-bold text-lg md:text-xl`}>Timing</div>
                            <div className={`${righteous.className} m-auto name font-bold text-lg md:text-xl`}>Event</div>
                            <div className={`${righteous.className} m-auto round font-bold text-lg md:text-xl`}>Round</div>
                        </div>
                    </div>
                    <div className="schedule">
                        {day1.map((event, index) => (
                            <div key={index} className="schedule-item grid grid-cols-3 gap-1 md:gap-4 py-4 border-t border-gray-300">
                                <div className={`${poppins.className} m-auto text-center text-sm md:text-base timing`}>{event.timing}</div>
                                <div className={`${poppins.className} m-auto text-center text-sm md:text-base name`}>{event.name}</div>
                                <div className={`${poppins.className} m-auto text-center text-sm md:text-base round`}>{event.round}</div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Day 2 : 21st March 2025 */}
                {/* <div className="day">
                    <h2 className={`${poppins.className} text-2xl text-white font-bold my-4`}>21st March</h2>
                    <div className="schedule-heading">
                        <div className="schedule-item grid grid-cols-3 gap-4 p-2 md:p-4 bg-gray-700 rounded-t-lg">
                            <div className={`${righteous.className} m-auto timing font-bold text-lg md:text-xl`}>Timing</div>
                            <div className={`${righteous.className} m-auto name font-bold text-lg md:text-xl`}>Event</div>
                            <div className={`${righteous.className} m-auto round font-bold text-lg md:text-xl`}>Round</div>
                        </div>
                    </div>
                    <div className="schedule">
                        {day2.map((event, index) => (
                            <div key={index} className="schedule-item grid grid-cols-3 gap-1 md:gap-4 py-4 border-t border-gray-300">
                                <div className={`${poppins.className} m-auto text-center text-sm md:text-base timing`}>{event.timing}</div>
                                <div className={`${poppins.className} m-auto text-center text-sm md:text-base name`}>{event.name}</div>
                                <div className={`${poppins.className} m-auto text-center text-sm md:text-base round`}>{event.round}</div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Day 3 : 22nd March 2025 */}
                {/* <div className="day">
                    <h2 className={`${poppins.className} text-2xl text-white font-bold my-4`}>22nd March</h2>
                    <div className="schedule-heading">
                        <div className="schedule-item grid grid-cols-3 gap-4 p-2 md:p-4 bg-gray-700 rounded-t-lg">
                            <div className={`${righteous.className} m-auto timing font-bold text-lg md:text-xl`}>Timing</div>
                            <div className={`${righteous.className} m-auto name font-bold text-lg md:text-xl`}>Event</div>
                            <div className={`${righteous.className} m-auto round font-bold text-lg md:text-xl`}>Round</div>
                        </div>
                    </div>
                    <div className="schedule">
                        {day3.map((event, index) => (
                            <div key={index} className="schedule-item grid grid-cols-3 gap-1 md:gap-4 py-4 border-t border-gray-300">
                                <div className={`${poppins.className} m-auto text-center text-sm md:text-base timing`}>{event.timing}</div>
                                <div className={`${poppins.className} m-auto text-center text-sm md:text-base name`}>{event.name}</div>
                                <div className={`${poppins.className} m-auto text-center text-sm md:text-base round`}>{event.round}</div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </main>
    )
}