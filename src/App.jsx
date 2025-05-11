import "./App.css";
import Navbar from "./components/Navbar";
import {Button} from "@heroui/button";
import {Accordion, AccordionItem} from "@heroui/accordion";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/feature-section";
import ExploreCategory from "./components/explore-category";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Directory from "./pages/directory";
import DirectoryDetail from "./pages/directory/[id]";

import LandingPage from "./pages/landingPage";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Signup from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
import ChatBot from "./pages/chatbot";
export default function App() {

  return (
    <div className="relative">
         <Navbar IslandguageSwitcher={true} />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/directory/:id" element={<DirectoryDetail  />} />
        <Route path="/chatbot" element={<ChatBot  />} />
      </Routes>
    </Router>
    </div>
  );
}

