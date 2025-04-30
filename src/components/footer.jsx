import React from "react";
import logo from "../assets/logo.svg";
import youtube from "../assets/social-icon/Frame.svg";
import twitter from "../assets/social-icon/Frame-1.svg";
import discord from "../assets/social-icon/Frame-2.svg";
import socialapp from "../assets/social-icon/Frame-3.svg";
import github from "../assets/social-icon/Frame-4.svg";
import telegram from "../assets/social-icon/Frame-5.svg";
import phone from "../assets/mi_call.svg";
import email from "../assets/ic_outline-email.svg";
import location from "../assets/akar-icons_location.svg";
import { Button } from "@heroui/button";
const Footer = () => {
  return (
    <footer className="bg-primary-black-20 ">
      <div className="container mx-auto relative">
        <div className="bg-gradient-footer lg:pt-11 lg:pr-[89px] lg:pl-11 lg:pb-11 p-5 rounded-2xl shadow-lg absolute -top-52 md:-top-32 z-10 w-[96.21%]  left-1/2 -translate-x-1/2">
          <div className="flex flex-col lg:flex-row w-full justify-between gap-5 lg:gap-0">
            <div className="flex flex-col gap-y-3">
              <h1 className="text-white text-4xl leading-10 font-semibold font-clash-display tracking-[-0.01em]">
                Try Yourdirectory.ai today
              </h1>
              <p className="text-white text-sm !leading-tight md:text-base w-full lg:w-[70.8%] pr-16">
                Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed
                consectetur aliquam scelerisque. Aliquam mauris ullamcorper sed
                amet curabitur bibendum eu phasellus ullamcorper.
              </p>
            </div>
            <div className="flex">
              <div className="flex h-full items-center gap-x-6">
                <Button
                  className="bg-primary-white text-primary-black font-montserrat"
                  size="lg"
                  radius="lg"
                >
                  Free Demo
                </Button>
                <Button
                  className="text-primary-white font-montserrat"
                  variant="bordered"
                  size="lg"
                  radius="lg"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:items-center pt-[134px] pb-14 flex-col lg:flex-row gap-y-10 lg:gap-y-0 items-start">
          <div className="flex flex-col gap-y-5">
            <img src={logo} alt="logo" className="w-[121px]" />
            <p className="text-primary-white text-[16px] font-normal leading-[27.3px]">
              Lorem ipsum dolor sit amet
            </p>
            <ul className="flex flex-row gap-3">
              <li>
                <a href="#">
                  <img src={youtube} alt="youtube" />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={discord} alt="discord" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={socialapp} alt="socialapp" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={github} alt="github" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-around text-white gap-x-16 gap-y-6 lg:gap-y-0">
            <div>
              <h2 className="font-bold mb-3  text-base leading-[18.7px] font-montserrat">
                USE CASES
              </h2>
              <ul className="flex flex-col gap-y-3">
                <li className="font-normal text-base leading-[27.3px] text-[#848895]">
                  Home
                </li>
                <li className="font-normal text-base leading-[27.3px] text-[#848895]">
                  Chatbot
                </li>
                <li className="font-normal text-base leading-[27.3px] text-[#848895]">
                  Add a Tool
                </li>
                <li className="font-normal text-base leading-[27.3px] text-[#848895]">
                  Community
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-3  text-base leading-[18.7px] font-montserrat">
                GET CONNECTED
              </h2>
              <ul className="flex flex-col gap-y-3">
                <li className="font-normal text-base leading-[27.3px] text-[#848895]">
                  About us
                </li>
                <li className="font-normal text-base leading-[27.3px] text-[#848895]">
                  Blog
                </li>
                <li className="font-normal text-base leading-[27.3px] text-[#848895]">
                  Newsletter
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-3  text-base leading-[18.7px] font-montserrat">
                CONTACT US
              </h2>
              <ul className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-2">
                  <img src={phone} alt="phone" />
                  <span className="font-normal text-base leading-[27.3px] text-[#848895]">
                    +966 331 766 152
                  </span>
                </li>
                <li className="flex items-center gap-x-2">
                  <img src={email} alt="email" />
                  <span className="font-normal text-base leading-[27.3px] text-[#848895]">
                    info@yourdirectory.ai
                  </span>
                </li>
                <li className="flex items-center gap-x-2">
                  <img src={location} alt="location" />
                  <span className="font-normal text-base leading-[27.3px] text-[#848895]">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
