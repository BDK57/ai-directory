import React from "react";
import logo from "../assets/logo.svg";
import {Button} from "@heroui/button";

const Navbar = () => {
  return (
    <>
      <div className="navbar relative left-1/2 -translate-x-1/2  z-[999] w-full transition-all duration-300 !bg-transparent py-[46px]">
        <nav className="flex justify-between items-center container mx-auto  ">
          <div className="flex space-x-[60px] text-primary-white">
            <a href="#" className="hover:underline text-base font-medium font-montserrat">
              Chatbot
            </a>

            <a href="#" className="hover:underline text-base font-medium font-montserrat">
              Add a tool
            </a>
            <a href="#" className="hover:underline text-base font-medium font-montserrat">
              Community
            </a>
          </div>
          <div className="flex items-center">
            <img
              src={logo}
              alt="YourDirectory.AI logo"
              className="w-[121px]"
            />
          </div>
          <div className="flex space-x-[30px]">
          <Button
              className="bg-primary-white text-primary-black font-montserrat"
              size="lg"
              radius="lg"
            >
              Sign Up
            </Button>
            <Button
              className="text-primary-white font-montserrat"
              variant="bordered"
              size="lg"
              radius="lg"
            >
              Sign In
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
