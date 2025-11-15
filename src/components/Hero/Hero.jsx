import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import {
  HeroSection,
  HeroAbout,
  Title,
  HighlightText,
  HeroText,
  Button,
  HeroImgBox,
  HeroImg,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroAbout>
        <Title>
          {t("hero.title")} <HighlightText>{t("hero.name")}</HighlightText>{" "}
          {t("hero.subtitle")}
        </Title>
        <HeroText>{t("hero.description")}</HeroText>
        <Button>
          <a href="/images/resume/Resume.pdf" download>
            {t("hero.downloadCV")}
          </a>
        </Button>
      </HeroAbout>
      <HeroImgBox>
        <HeroImg src="/images/hero2.jpg" alt="my photo" />
      </HeroImgBox>
    </HeroSection>
  );
};

export default Hero;
