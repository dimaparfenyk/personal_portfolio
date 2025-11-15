import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import {
  FooterContainer,
  FooterContent,
  FooterText,
  FooterYear,
  FooterNameLink,
  FooterSocials,
  FooterSocialsList,
  FooterSocialsItem,
  FooterSocialsLink,
  FooterIcon,
} from "./Footer.styled";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSocials>
          <FooterSocialsList>
            <FooterSocialsItem>
              <FooterSocialsLink
                href="https://www.linkedin.com/in/dmitrij-parfeniuk-3b882323b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterIcon className="icon icon-linkedin" />
              </FooterSocialsLink>
            </FooterSocialsItem>
            <FooterSocialsItem>
              <FooterSocialsLink
                href="https://github.com/dimaparfenyk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterIcon className="icon icon-github" />
              </FooterSocialsLink>
            </FooterSocialsItem>
            <FooterSocialsItem>
              <FooterSocialsLink
                href="https://t.me/dmitrijparfenjuk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterIcon className="icon icon-telegram" />
              </FooterSocialsLink>
            </FooterSocialsItem>
          </FooterSocialsList>
        </FooterSocials>
        <FooterText>
          © <FooterYear>{currentYear}</FooterYear>{" "}
          <FooterNameLink
            href="https://github.com/dimaparfenyk"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("sidebar.name")}
          </FooterNameLink>
          . {t("footer.copyright")}
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
