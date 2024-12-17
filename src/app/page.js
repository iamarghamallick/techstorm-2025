import Details from "@/components/Details";
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home-container flex justify-center relative">

      {/* background effects  */}
      <Image src='/assets/bg/meta_girl.png' width={1000} height={1000} alt='background' className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 top-0 h-screen w-auto object-cover max-w-none z-20" style={{
        mixBlendMode: 'plus-lighter',
      }} />

      <Image src='/assets/bg/gradient-1.svg' width={1000} height={1000} alt='background' className="absolute h-[1024px] w-[908px] -left-96" />
      <Image src='/assets/bg/gradient-2.svg' width={1000} height={1000} alt='background' className="absolute h-[1300px] w-[1400px] left-[779px] top-[-236.46px]" />
      <Image src='/assets/bg/gradient-3.svg' width={1000} height={1000} alt='background' className="absolute h-[800px] w-[700px] top-[-500px]" />
      <Image src='/assets/bg/gradient-3.svg' width={1000} height={1000} alt='background' className="absolute h-[630px] w-[630px] left-[807px] top-[792.26px]" />

      {/* background effects ends here  */}

      <div className="container md:px-20">
        <Hero />
        <Details />
        <Gallery />
        <Events />
        <Faq />
      </div>
    </main>
  );
}
