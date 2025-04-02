import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeatureCards from "@/components/FeatureCards";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
}
