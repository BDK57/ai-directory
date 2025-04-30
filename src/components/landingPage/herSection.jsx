import React from "react";
import Sheikh from "../../assets/dreamingSheikh.png";
import BgImage from "../../assets/landingbg.png";
import Edit from "../../assets/icons/edit-02.png";
import Header from "../header/header";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";
const Shades = () => {
  return (
    <>
      <div className="absolute w-[60vw] max-w-[50vw] h-[50vw] max-h-[585px] left-[-10vw] top-[-72px] bg-[#8C292F] blur-[137px] "></div>
      <div className="absolute left-[520px] top-[-8px] w-full lg:w-[932px] lg:h-[427px] bg-[#4A4588] blur-[137px] "></div>
    </>
  );
};

const BordersLines = () => {
  return (
    <>
      <div className="border absolute border-primary-white-20  w-full top-40  z-20" />
      <div className="border absolute border-primary-white-20  w-full   z-20" />
    </>
  );
};

const BackgroundImage = () => {
  return (
    <div className="absolute left-0 right-0 w-full bottom-0 h-[99vh] z-20">
      <img src={BgImage} alt="AI Guide" className="w-full h-full" />
    </div>
  );
};

const LeftSection = ({ t, i18n }) => {
  return (
    <div className="space-y-6 z-20 flex flex-col justify-center">
      <h1 className="font-clash-display font-semibold  text-start text-4xl md:text-5xl lg:text-4xl xl:text-6xl  -tracking-[3%] lg:leading-tight leading-snug ">
        {t("home.title")}
        <br />{" "}
        <span className="font-clash-display font-semibold  text-start text-4xl md:text-5xl lg:text-5xl xl:text-[80px]  -tracking-[3%] lg:!leading-[100px] leading-snug  w-full text-primary-yellow">
          {t("home.latestAiTools")}
        </span>
      </h1>
      <p className="w-full  font-[400] text-start text-sm xl:text-base  font-montserrat leading-7 tracking-wide text-primary-white-50 mt-7 lg:mt-0 xl:mt-7 ">{t("home.description")}</p>
      <div className="relative mt-6 w-[80%]">
        <div className="relative p-[3px]  bg-gradient-to-r from-[#8C292F] to-[#4A4588] rounded-xl">
          <input
            type="text"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            className="w-full p-4 pl-12 bg-[#121221] px-12 placeholer-text-white  focus:outline-none focus:border-[#8C292F] text-white rounded-lg"
            placeholder={t("home.placeholder")}
          />
          <span
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              i18n.language === "ar" ? "right-4" : "left-4"
            }`}
          >
            <img src={Edit} alt="Icon" className="w-5 h-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

const RightSection = () => {
  <div className="flex justify-center w-full h-full z-20 relative">
    <div className="absolute bottom-0 h-[78vh]">
      <img src={Sheikh} alt="AI Guide" className="h-full w-full object-cover" />
    </div>
  </div>;
};
const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative z-[1] min-h-screen overflow-hidden  text-white bg-primary-black ">
      <BackgroundImage />
      <BordersLines />
      <Shades />
      {/* <Header /> */}
      <Navbar IslandguageSwitcher={true} />
      <div
        className="grid md:grid-cols-2 items-center h-screen   lg:px-22 relative container border-x border-x-primary-white-20  z-20"
        style={{ height: "calc(100vh - 157px)" }}
      >
        {/* Left Side - Text */}
        <LeftSection t={t} i18n={i18n} />

        {/* Right Side - Image */}
        <div className="flex justify-center w-full h-full z-20 relative">
          <div className="lg:absolute lg:bottom-0 lg:h-[78vh]">
            <img
              src={Sheikh}
              alt="AI Guide"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
