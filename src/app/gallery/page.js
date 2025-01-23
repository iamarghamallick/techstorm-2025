import { gallery } from "@/lib/gallery";
import { poppins } from "../fonts";
import Image from "next/image";

export default function Gallery() {
    return (
        <main className="gallery-container min-h-screen flex flex-col justify-center p-2 md:p-8 py-8">
            <div className="container">
                <h1 className={`${poppins.className} text-4xl text-white font-bold`}>Gallery</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {gallery.map((item, index) => (
                    <div key={index} className="gallery-item mx-auto">
                        <Image src={item.image} alt="gallery pic" width={400} height={300} className="aspect-square object-cover w-full h-full rounded-lg grayscale" />
                    </div>
                ))}
            </div>
        </main>
    )
}