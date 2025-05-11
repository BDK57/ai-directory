import React from 'react'
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import FeatureSection from "../../components/feature-section";
import ExploreCategory from "../../components/explore-category";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../components/common/Loader";
import Error from "../../components/common/Error";
const Directory = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // LANG
  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://admin.the-expert.ai/api/feature_tools"
        );
        setTools(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch tools data");
        console.error("Error fetching tools:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <Error/>;
  }
  return (
    <>

    <div className="relative z-[1] bg-primary-black">
    <Navbar IslandguageSwitcher={false} />
    <HeroSection />
    </div>
    <FeatureSection  data={tools}/>
    <ExploreCategory />
    <Footer />

    </>
  )
}

export default Directory