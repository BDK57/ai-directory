import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang); // Store language
    // window.location.reload(); // Refresh to apply direction changes
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-primary-yellow px-4 py-2 text-black rounded-lg transition-all duration-300 hover:bg-yellow-500"
    >
      {i18n.language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    </button>
  );
};

export default LanguageSwitcher;
