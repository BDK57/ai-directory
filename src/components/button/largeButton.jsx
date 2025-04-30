import React from "react";
import Icon from '../../assets/icons/buttonicon.png'
import { Button } from "@heroui/button";



const CustomButtonWithIcon = ({ text, onClick }) => {
  return (
    <Button
    size="lg"
      className="flex items-center justify-between z-20 cursor-pointer px-6 py-4 bg-[#000] text-white rounded-lg border border-white shadow-md 
      active:scale-95 transition-all duration-150 ease-out font-montserrat"
      onClick={onClick}
    >
      <span className="text-base lg:text-lg font-medium">{text}</span>
      <span className="ml-3 w-6 h-6 flex items-center justify-center bg-[#2A1C45] rounded-full">
        <img src={Icon} alt="" />
      </span>
    </Button>
  );
};

export default CustomButtonWithIcon;
