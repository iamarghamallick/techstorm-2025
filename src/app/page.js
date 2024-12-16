import Details from "@/components/Details";
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home-container flex justify-center relative">

      <Image src='/assets/bg/gradient-1.svg' width={1000} height={1000} alt='background' className="absolute h-[1024px] w-[908px] -left-96" />
      <Image src='/assets/bg/gradient-2.svg' width={1000} height={1000} alt='background' className="absolute h-[1300px] w-[1400px] left-[779px] top-[-236.46px]" />
      <Image src='/assets/bg/gradient-3.svg' width={1000} height={1000} alt='background' className="absolute h-[800px] w-[700px] top-[-500px]" />
      <Image src='/assets/bg/gradient-3.svg' width={1000} height={1000} alt='background' className="absolute h-[630px] w-[630px] left-[807px] top-[792.26px]" />

      <div className="container">
        <Hero />
        <Details />
        <Gallery />
        <Events />
        <Faq />
      </div>
    </main>
  );
}
