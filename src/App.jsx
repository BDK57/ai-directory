import "./App.css";
import Navbar from "./components/Navbar";
import {Button} from "@heroui/button";
import {Accordion, AccordionItem} from "@heroui/accordion";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/feature-section";
import ExploreCategory from "./components/explore-category";
export default function App() {

  return (
    <>
    <div className="relative z-[1] bg-primary-black">
    <Navbar />
    <HeroSection />
    </div>
    <FeatureSection />
    <ExploreCategory />

    </>
  );
}

