import { useState } from "react";
import CustomButton from "../button/button";
import Logo from '../../assets/logo.png'
import { Button } from "@heroui/button";
import LanguageSwitcher from "../common/languageSwitcher";
// import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [languageOpen, setLanguageOpen] = useState(false);
  

  return (
    <header className="fixed  py-10 top-0 left-0 w-full z-50  text-white    m-auto">
      <div className="container flex justify-between items-center">
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
              src={Logo}
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
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
