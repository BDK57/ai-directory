import "./App.css";
import Navbar from "./components/Navbar";
import {Button} from "@heroui/button";
import {Accordion, AccordionItem} from "@heroui/accordion";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/feature-section";
import ExploreCategory from "./components/explore-category";
import LandingPage from "./pages/landingPage";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
export default function App() {

  return (
    <>
      <I18nextProvider i18n={i18n}>
     
    {/* <div className="relative z-[1] bg-primary-black">
    <Navbar />
    <HeroSection /> */}
    <LandingPage/>
    {/* </div> */}
    <FeatureSection />
    <ExploreCategory />
    </I18nextProvider>
    </>
  );
}

