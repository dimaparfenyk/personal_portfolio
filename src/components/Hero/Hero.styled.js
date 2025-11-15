import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  margin-bottom: 70px;
  padding: 72px 60px;
  background-image: url("/images/hero-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-color: ${theme.colors.primaryBg};

  @media screen and (max-width: 1024px) {
    padding: 50px 40px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 30px 15px;
    margin-bottom: 30px;
  }
`;

export const HeroAbout = styled.div`
  max-width: 60%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 18px;
  font-size: 48px;
  line-height: 1.24;
  letter-spacing: 1px;
  color: ${theme.colors.titleDark};

  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HighlightText = styled.span`
  color: ${theme.colors.highlightText};
`;

export const HeroText = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.24;
  letter-spacing: 0.16px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
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

  @media screen and (max-width: 768px) {
    padding: 14px 28px;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 24px;
    font-size: 12px;
    width: 100%;
  }
`;

export const HeroImgBox = styled.div`
  position: absolute;
  right: 8%;
  bottom: 0;

  @media screen and (max-width: 1024px) {
    right: 5%;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
`;

export const HeroImg = styled.img`
  width: 336px;

  @media screen and (max-width: 1024px) {
    width: 280px;
  }

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
  }
`;
