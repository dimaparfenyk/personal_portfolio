import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  LanguageSwitcherContainer,
  LanguageButton,
} from "./LanguageSwitcher.styled";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <LanguageSwitcherContainer>
      <LanguageButton
        active={language === "en"}
        onClick={() => setLanguage("en")}
      >
        EN
      </LanguageButton>
      <LanguageButton
        active={language === "ru"}
        onClick={() => setLanguage("ru")}
      >
        RU
      </LanguageButton>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
