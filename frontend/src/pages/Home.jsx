import Navbar from "../components/layout/Navbar";
import Hero from "../components/common/Hero";
import Stats from "../components/common/Stats";
import Features from "../components/common/Features";
import HowItWorks from "../components/common/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
    </>
  );
}