import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FooterContainer = styled.footer`
  padding: 24px 0;
  background-color: #545454;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #ffffff;
  white-space: nowrap;

  @media screen and (max-width: 480px) {
    font-size: 12px;
    white-space: normal;
    text-align: center;
  }
`;

export const FooterLink = styled.a`
  color: ${theme.colors.highlightText};
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${theme.colors.accentBg};
  }
`;

export const FooterYear = styled.span`
  color: #ffffff;
  font-weight: 500;
`;

export const FooterNameLink = styled.a`
  color: #e86c0a;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff8c42;
    text-decoration: underline;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterSocialsList = styled.ul`
  display: flex;
  column-gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterSocialsItem = styled.li`
  width: 24px;
  height: 24px;
`;

export const FooterSocialsLink = styled.a`
  display: block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }
`;

export const FooterIcon = styled.span`
  font-family: "social-icons";
  font-weight: 500;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-size: 28px;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #e86c0a;
    transform: translateY(-3px);
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }

  &.icon-linkedin::before {
    content: "${theme.icons.linkedin}";
  }

  &.icon-github::before {
    content: "${theme.icons.github}";
  }

  &.icon-telegram::before {
    content: "${theme.icons.telegram}";
  }
`;
