import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const SocialsList = styled.ul`
  display: flex;
  column-gap: 32px;
`;

const SocialsItem = styled.li`
  width: 24px;
  height: 24px;
`;

const SocialsLink = styled.a`
  display: block;
`;

const Icon = styled.span`
  font-family: "social-icons";
  font-weight: 500;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-size: 24px;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  color: ${theme.colors.highlightText};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: 0.3s all ease-in-out;

  &:hover,
  &:focus {
    color: ${theme.colors.accentBg};
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

const Socials = () => {
  return (
    <SocialsList>
      <SocialsItem>
        <SocialsLink
          href="https://www.linkedin.com/in/dmitrij-parfeniuk-3b882323b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="icon icon-linkedin" />
        </SocialsLink>
      </SocialsItem>
      <SocialsItem>
        <SocialsLink
          href="https://github.com/dimaparfenyk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="icon icon-github" />
        </SocialsLink>
      </SocialsItem>
      <SocialsItem>
        <SocialsLink
          href="https://t.me/dmitrijparfenjuk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="icon icon-telegram" />
        </SocialsLink>
      </SocialsItem>
    </SocialsList>
  );
};

export default Socials;
