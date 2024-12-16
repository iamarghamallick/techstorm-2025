import EventCategoryCard from "@/components/EventCategoryCard";
import { cards } from "@/lib/events";

export default function Events() {
    return (
        <main className="events-container min-h-screen flex justify-center p-2 py-8">
            <div className="container flex flex-col justify-center items-center gap-4 md:gap-8">
                {cards.map((card) => (
                    <EventCategoryCard key={card.id} {...card} />
                ))}
            </div>
        </main>
    );
}
