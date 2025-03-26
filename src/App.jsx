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

export default function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/directory" element={<Directory />} />
        <Route path="/directory/:id" element={<DirectoryDetail  />} />
      </Routes>
    </Router>
    </>
  );
}

