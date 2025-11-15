import React from "react";
import { SocialsList, SocialsItem, SocialsLink, Icon } from "./Socials.styled";

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
