import MemberCard from "@/components/MemberCard";
import { poppins } from "../fonts";
import { team } from "@/lib/team";

export default function Team() {
    return (
        <main className="gallery-container min-h-screen flex justify-center p-2 py-8">
            <div className="container">
                <h1 className={`${poppins.className} text-4xl text-white font-bold`}>Meet Our Team</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 my-2 md:my-10 gap-2 md:gap-4">
                    {team.map((card, index) => (
                        <MemberCard key={index} name={card.name} image={card.image} position={card.position} bgcolor={card.bgcolor} />
                    ))}
                </div>
            </div>
        </main>
    )
}