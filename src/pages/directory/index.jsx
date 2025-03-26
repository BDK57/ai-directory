import React from 'react'
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import FeatureSection from "../../components/feature-section";
import ExploreCategory from "../../components/explore-category";
import Footer from "../../components/footer";

const Directory = () => {

  return (
    <>

    <div className="relative z-[1] bg-primary-black">
    <Navbar />
    <HeroSection />
    </div>
    <FeatureSection />
    <ExploreCategory />
    <Footer />

    </>
  )
}

export default Directory