import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import Socials from "../Socials";
import {
  SidebarContainer,
  Box,
  ImgBox,
  ProfileImg,
  Subtitle,
  ProfessionText,
  List,
  ListItem,
  Contacts,
  ContactItem,
  ContactLabel,
  ContactLink,
  Address,
  Button,
} from "./Sidebar.styled";

const Sidebar = () => {
  const { t, language } = useTranslation();

  return (
    <SidebarContainer>
      <Box>
        <ImgBox>
          <ProfileImg src="/images/Profile.jpg" alt="profile" />
        </ImgBox>
        <Subtitle>{t("sidebar.name")}</Subtitle>
        <ProfessionText>{t("sidebar.profession")}</ProfessionText>
        <Socials />
      </Box>

      <Box>
        <Subtitle>{t("sidebar.contacts")}</Subtitle>
        <Contacts>
          <ContactItem>
            <ContactLabel>{t("sidebar.phone")}</ContactLabel>
            <ContactLink
              href="tel:+79495032153"
              target="_blank"
              rel="noopener noreferrer"
            >
              +7(949)503-21-53
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLabel>{t("sidebar.telegram")}</ContactLabel>
            <ContactLink
              href="https://t.me/dmitrijparfenjuk"
              target="_blank"
              rel="noopener noreferrer"
            >
              +7(949)503-21-53
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLabel>{t("sidebar.email")}</ContactLabel>
            <ContactLink
              href="mailto:dimaparfenyk1990@gmail.com"
              title={
                language === "en"
                  ? "Click to open email client. Ctrl+Click to copy"
                  : "Нажмите, чтобы открыть почту. Ctrl+Click для копирования"
              }
            >
              dimaparfenyk1990@gmail.com
            </ContactLink>
          </ContactItem>
        </Contacts>
        <Address>
          <ContactLabel>{t("sidebar.address")}</ContactLabel>
          {t("sidebar.addressValue")}
        </Address>
      </Box>

      <Box>
        <Subtitle>{t("sidebar.languages")}</Subtitle>
        <List>
          <ListItem>{language === "en" ? "Russian" : "Русский"}</ListItem>
          <ListItem>{language === "en" ? "English" : "Английский"}</ListItem>
        </List>
      </Box>

      <Box>
        <Subtitle>{t("sidebar.techSkills")}</Subtitle>
        <List>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JS</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Redux Toolkit</ListItem>
          <ListItem>Node</ListItem>
          <ListItem>Express</ListItem>
          <ListItem>MongoDB</ListItem>
        </List>
      </Box>

      <Button>
        <a href="/images/resume/Resume.pdf" download>
          {t("sidebar.downloadCV")}
        </a>
      </Button>
    </SidebarContainer>
  );
};

export default Sidebar;
