import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../directory/component/hero-section";
import UsesSection from "../directory/component/uses-section";
import VideoSection from "./component/video-section";
import videoImage from "../../assets/detail-page/video-one.webp";
import SliderSection from "./component/slider-section";
import videoImageTwo from "../../assets/detail-page/video-two.webp";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/common/Loader";
const DirectoryDetail = () => {
  const { id } = useParams();
  const [tool, setTool] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // LANG
  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://admin.the-expert.ai/api/aitools/${id}`
        );
        setTool(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch tools data");
        console.error("Error fetching tools:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, [id]);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>

    <div className="relative z-[1] bg-primary-black">
    <Navbar />
    <HeroSection data={tool} />
    </div>
    <UsesSection data={tool} />
    <VideoSection title={"Introductory link"} description={"Lorem ipsum dolor sit amet consectetur. Pharetra erat gravida malesuada ac id bibendum lorem nec. In non pretium vitae facilisis justo eget. Lorem at sit augue nec eget. Sit consequat lorem iaculis at fermentum orci pulvinar quisque viverra."} image={videoImage}/>
    <VideoSection title={"Educational links"} description={"Lorem ipsum dolor sit amet consectetur. Pharetra erat gravida malesuada ac id bibendum lorem nec. In non pretium vitae facilisis justo eget. Lorem at sit augue nec eget. Sit consequat lorem iaculis at fermentum orci pulvinar quisque viverra."} image={videoImageTwo}/>
    <SliderSection data={tool?.data?.similar_tools}  title={"Similar Tools"} description={"Handpicked tools that are trending and highly rated by our community."}/>
    <SliderSection data={tool?.data?.aitool?.features} title={"Explore Features of Chat GPT"} description={"Handpicked tools that are trending and highly rated by our community."} className={'pb-32'} />
    <Footer />
    </>
  );
};

export default DirectoryDetail;
