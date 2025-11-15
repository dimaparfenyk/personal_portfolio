import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const HeroSection = styled.section`
  position: relative;
  display: flex;
  margin-bottom: 70px;
  padding: 72px 60px;
  background-image: url("/images/hero-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-color: ${theme.colors.primaryBg};
`;

const HeroAbout = styled.div`
  max-width: 60%;
`;

const Title = styled.h1`
  margin-bottom: 18px;
  font-size: 48px;
  line-height: 1.24;
  letter-spacing: 1px;
  color: ${theme.colors.titleDark};
`;

const HighlightText = styled.span`
  color: ${theme.colors.highlightText};
`;

const HeroText = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.24;
  letter-spacing: 0.16px;
`;

const Button = styled.button`
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background-color: ${theme.colors.highlight};
  color: #fff;
  transition: 0.3s all ease-in-out;

  &:hover,
  &:focus {
    background-color: ${theme.colors.accentBg};
  }

  a {
    color: #fff;
  }
`;

const HeroImgBox = styled.div`
  position: absolute;
  right: 8%;
  bottom: 0;
`;

const HeroImg = styled.img`
  width: 336px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroAbout>
        <Title>
          I'm <HighlightText>Dmytrii Parfeniuk</HighlightText> Fullstack
          Developer
        </Title>
        <HeroText>
          I'm a junior Fullstack Developer looking for my first professional
          opportunity. Skilled in JavaScript, React, and Node.js. Eager to
          learn, grow, and contribute.
        </HeroText>
        <Button>
          <a href="/images/resume/Resume.pdf" download>
            Download CV
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
