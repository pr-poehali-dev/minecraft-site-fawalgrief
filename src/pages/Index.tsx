import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DonatePackages from "@/components/DonatePackages";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <DonatePackages />
      <Footer />
    </div>
  );
};

export default Index;
