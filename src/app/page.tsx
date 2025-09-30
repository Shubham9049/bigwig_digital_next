import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("../../components/About"), { ssr: false });
import Blogs from "../../components/Blog";
import CaseCard from "../../components/CaseCard";
import Client from "../../components/Clients";
import FlipCard from "../../components/FlipCard";
import Hero from "../../components/Hero";
const HowWeWork = dynamic(() => import("../../components/HowWeWork"), {
  ssr: false,
});
import ImageSlider from "../../components/ImageSlider";
import Nav from "../../components/Nav";
import Partners from "../../components/Partners";
import ScrollOverlappingText from "../../components/ScrollSection";
import Stats from "../../components/Stats";
const FAQ = dynamic(() => import("../../components/Faq"), { ssr: false });
import LocationsSection from "../../components/Location";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <Partners />
      <Stats />
      <Client />
      <ScrollOverlappingText />
      <FlipCard />
      <ImageSlider />
      <AboutUs />
      <CaseCard />
      <HowWeWork />
      <Blogs />
      <FAQ />
      <LocationsSection />
      <Footer />
    </div>
  );
}
