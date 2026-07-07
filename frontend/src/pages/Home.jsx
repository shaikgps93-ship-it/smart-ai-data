import Navbar from "../components/layout/Navbar";
import Hero from "../components/common/Hero";
import Stats from "../components/common/Stats";
import Features from "../components/common/Features";
import HowItWorks from "../components/common/HowItWorks";
import Industries from "../components/common/Industries";
import Pricing from "../components/common/Pricing";
import FAQ from "../components/common/FAQ";
import CTA from "../components/common/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <HowItWorks />

      <Industries />

      <Pricing />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}