import Details from "@/components/Details";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="home-container flex justify-center">
      <div className="container">
        <Hero />
        <Details />
      </div>
    </main>
  );
}
