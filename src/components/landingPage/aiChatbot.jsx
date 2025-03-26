import React from "react";
import Button from "../button/largeButton";
import ChatBot3d from '../../assets/chatbot-3d.png'
import CustomButtonWithIcon from "../button/largeButton";

const AIChatbot = () => {
  return (
    <section className=" bg-[#121221] text-white  px-6">
      <div className="container flex flex-col items-center text-center border-x border-x-primary-white-20 py-12">
      <h2 className="sub-heading mb-6">AI Chatbot</h2>

      {/* Chatbot Character & Messages */}
      <div className="relative w-full max-w-5xl flex justify-center">
        {/* Chatbot Character */}
        <img 
          src={ChatBot3d} // Replace with your actual image path
          alt="AI Chatbot"
          className="w-80 z-20"
        />

        {/* Chat Bubbles */}
        <div className="absolute top-10 left-[80px] w-[361px] bg-[#2D2B52B2] text-left p-4 rounded-lg border border-[#565569] shadow-md">
        <h3 className="text-[24px] font-[600] font-clash-display leading-[40px] tracking-[0%]">
  Lorem ipsum dolor
</h3>

          <p className="text-[14px] font-[500] font-montserrat leading-[100%] tracking-[0%] text-primary-white-50">
          Lorem ipsum dolor sit amet consectetur. Id
eu ipsum urna sed consectetur aliquam 
scelerisque. 
          </p>
        </div>

        <div className="absolute top-40 right-8 w-[361px] bg-[#2D2B52B2] text-left p-4 rounded-lg border border-[#565569] shadow-md">
        <h3 className="text-[24px] font-[600] font-clash-display leading-[40px] tracking-[0%]">
  Lorem ipsum dolor
</h3>

          <p className="text-[14px] font-[500] font-montserrat leading-[100%] tracking-[0%] text-primary-white-50">
          Lorem ipsum dolor sit amet consectetur. Id
eu ipsum urna sed consectetur aliquam 
scelerisque. 
          </p>
        </div>

        <div className="absolute bottom-[50px] left-2 w-[361px] bg-[#2D2B52B2] text-left p-4 rounded-lg border border-[#565569] shadow-md">
        <h3 className="text-[24px] font-[600] font-clash-display leading-[40px] tracking-[0%]">
  Lorem ipsum dolor
</h3>

          <p className="text-[14px] font-[500] font-montserrat leading-[100%] tracking-[0%] text-primary-white-50">
          Lorem ipsum dolor sit amet consectetur. Id
eu ipsum urna sed consectetur aliquam 
scelerisque. 
          </p>
        </div>
      </div>

      {/* Description Text */}
      <p className="default-paragraph mt-16 max-w-2xl ">
        Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque.
        Aliquam mauris ullamcorper sed amet curabitur bibendum eu phasellus ullamcorper.
        Egestas feugiat malesuada ultricies ac consectetur.
      </p>

      {/* Button */}
      <div className="mt-6">
        <CustomButtonWithIcon text="Discover the Best AI Chatbots" />
      </div>
      </div>
    </section>
  );
};

export default AIChatbot;
