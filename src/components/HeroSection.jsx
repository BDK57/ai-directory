import React from "react";
import heroBg from "../assets/hero-bg.webp";
import shadeOne from "../assets/shade-1.svg";
import shadeTwo from "../assets/shade-2.svg";
import shadeThree from "../assets/shade-bottom.svg";
import characterImg from "../assets/character-img.webp";
import InputBaseField from "./input-base";
import EditIcon from "../assets/edit-icon.svg";
const HeroSection = () => {
  return (
    <>
      <section
        id="hero"
        className="border-t border-t-primary-white-20 "
      >
        <div className="flex flex-row  gap-y-8 justify-start items-start text-white w-full   mx-auto container relative z-30 border-x border-x-primary-white-20 h-[61.5vh] min-h[586px]">
          <div className="flex w-full h-full  flex-col justify-center items-start text-white w-4/5">
            <h1 className="font-clash-display font-semibold  text-start text-4xl md:text-5xl lg:text-5xl xl:text-6xl  -tracking-[3%] leading-tight  w-full xl:w-2/4 2xl:w-11/12">
              Discover the Best
            </h1>
            <h2 className="font-clash-display font-semibold  text-start text-4xl md:text-5xl lg:text-5xl xl:text-[80px]  -tracking-[3%] !leading-[100px]  w-full text-primary-yellow">
              AI Tools for Every Need
            </h2>
            <p className="w-full xl:w-[50%]  font-[400] text-start text-sm xl:text-base  font-montserrat leading-7 tracking-wide text-primary-white-50 mt-7">
              Your one-stop directory for AI tools that transform business,
              education, design, and more.
            </p>
            <InputBaseField
              //   label="Email"
              startContent={
                <img src={EditIcon} alt="Edit Icon" className="w-6 h-6" />
              }
              placeholder="Search for tools"
              className={{
                base: "w-2/4 max-w-[545px] items-center gap-10 mt-7 ",
                innerWrapper: "gap-2.5",
                input: [
                  "bg-[transparent]",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  "text-lg",
                ],
                inputWrapper: [
                  "bg-[#121221]",
                  "shadow-xl",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "!h-[70px] border-none",
                  "!px-[26px]",
                ],
              }}
              size="lg"
              radius="md"
              variant="bordered"
            />
          </div>
          <div className="character-img absolute right-0 -top-8">
            <img src={characterImg} alt="Character Image" />
          </div>
        </div>
        <img
          id="hero-video"
          src={heroBg}
          className="w-screen h-full absolute top-0 right-0 -z-[1]"
        />
        <img src={shadeOne} alt="" className="absolute top-0 left-0 -z-[2]" />
        <img
          src={shadeTwo}
          alt=""
          className="absolute bottom-0 right-0 -z-[2]"
        />
        <img
          src={shadeThree}
          alt=""
          className="absolute -bottom-1/3 left-1/2 -translate-x-1/2  -z-[2]"
        />
      </section>
    </>
  );
};

export default HeroSection;
