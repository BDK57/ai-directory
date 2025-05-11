import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Button } from "@heroui/button";
import LanguageSwitcher from "./common/languageSwitcher";

const Navbar = ({IslandguageSwitcher=false}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="navbar  fixed top-0  left-1/2 -translate-x-1/2  z-[999] w-full transition-all duration-300 !bg-transparent py-[46px]">
        <nav className="flex justify-between items-center container mx-auto  ">
          <div className="space-x-[60px] text-primary-white hidden lg:flex">
            <a
              href="#"
              className="hover:underline text-base font-medium font-montserrat"
            >
              Chatbot
            </a>

            <a
              href="#"
              className="hover:underline text-base font-medium font-montserrat"
            >
              Add a tool
            </a>
            <a
              href="#"
              className="hover:underline text-base font-medium font-montserrat"
            >
              Community
            </a>
          </div>
          <div className="flex items-center">
            <img src={logo} alt="YourDirectory.AI logo" className="w-[121px]" />
          </div>
          <div className="flex items-center relative h-full">
            <div
              onClick={toggleMenu}
              className="hem absolute right-0 z-[999] -top-1/2 -translate-y-1/2 lg:hidden"
              style={{ opacity: 1 }}
            >
              <div id="hamburger" className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                <svg viewBox="0 0 100 100">
                  <path
                    className="line line1"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path
                    className="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  />
                </svg>
              </div>


            </div>
          </div>

          <div className="space-x-[30px] hidden lg:flex">
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
            {IslandguageSwitcher && <LanguageSwitcher /> }

          </div>
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-primary-black bg-opacity-95 z-40 xl:hidden transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="/"
            className="text-primary-white text-2xl font-montserrat hover:text-primary-yellow transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
             Chatbot
          </a>
          <a
            href="/"
            className="text-primary-white text-2xl font-montserrat hover:text-primary-yellow transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
             Add a tool
          </a>
          <a
            href="/"
            className="text-primary-white text-2xl font-montserrat hover:text-primary-yellow transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
             Community
          </a>
          {/* Add more menu items as needed */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
