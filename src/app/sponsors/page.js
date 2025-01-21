import { poppins } from "../fonts";
import { sponsors } from "@/lib/sponsors";
import SponsorCard from "@/components/SponsorCard";

export default function Sponsors() {
    return (
        <main className="sponsors-container min-h-screen flex justify-center p-2 py-8">
            <div className="container">
                <h1 className={`${poppins.className} text-4xl text-white font-bold`}>Sponsors</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 my-2 md:my-10 gap-2 md:gap-4">
                    {sponsors.map((card, index) => (
                        <SponsorCard key={index} title={card.title} image={card.image} category={card.category} />
                    ))}
                </div>
            </div>
        </main>
    )
}