import { gallery } from "@/lib/gallery";
import { poppins, righteous } from "../fonts";
import Image from "next/image";

export default function Gallery() {
    return (
        <main className="mt-16 md:mt-24 gallery-container min-h-screen flex flex-col justify-center items-center p-2 md:p-8 py-8">
            <div className="container">
                <h1 className={`${poppins.className} text-4xl text-center text-white font-bold`}>Gallery</h1>
                <p className={`${righteous.className} text-gray-400 text-center px-2`}>Glimpses from TechStorm 2.24</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 my-8 md:px-8">
                    {gallery.map((item, index) => (
                        <div key={index} className="gallery-item mx-auto relative">
                            <Image src={item.image} alt="gallery pic" width={400} height={300} className="aspect-square object-cover w-full h-full rounded-lg grayscale hover:filter-none transition-all duration-500 ease-in-out" />
                            <span className="absolute top-4 right-4 bg-gray-800/80 rounded-lg px-4 py-2">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}