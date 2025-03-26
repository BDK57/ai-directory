import React from "react";

const CustomButton = ({ label, onClick, bgColor, borderColor, textColor }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg border font-medium font-montserrat transition-all duration-300 shadow-md hover:opacity-80`}
      style={{
        background: bgColor || "transparent",
        borderColor: borderColor || "#4A4588",
        color: textColor || "white",
      }}
    >
      {label}
    </button>
  );
};

export default CustomButton;
