import { poppins } from "../fonts";

export default function Gallery() {
    return (
        <main className="gallery-container min-h-screen flex justify-center p-2 py-8">
            <div className="container">
                <h1 className={`${poppins.className} text-4xl text-white font-bold`}>Gallery</h1>
            </div>
        </main>
    )
}