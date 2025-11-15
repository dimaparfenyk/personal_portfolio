import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Socials from "./Socials";

const SidebarContainer = styled.aside`
  max-width: 305px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  padding: 50px 16px 24px;
  background-color: ${theme.colors.primaryBg};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const ImgBox = styled.div`
  margin-bottom: 32px;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: auto;
`;

const Subtitle = styled.h3`
  color: ${theme.colors.titleDark};
  margin: 0 auto 16px;
`;

const ProfessionText = styled.p`
  margin: 0 auto 16px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    margin-top: 5px;
    border-radius: 2px;
    background-color: ${theme.colors.highlight};
  }
`;

const Contacts = styled.ul`
  margin-bottom: 10px;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ContactLabel = styled.span`
  display: inline-block;
  min-width: 90px;
  margin-bottom: 4px;
  margin-right: 10px;
  padding: 2px 6px 2px 4px;
  color: ${theme.colors.titleDark};
  background-color: ${theme.colors.highlight};
`;

const ContactLink = styled.a`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Address = styled.address`
  font-style: normal;
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

const Sidebar = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "dimaparfenyk1990@gmail.com";

    try {
      navigator.clipboard.writeText(email).then(() => {
        if (window.Toastify) {
          window
            .Toastify({
              text: "Email copied to buffer",
              duration: 2000,
              gravity: "bottom",
              position: "center",
              stopOnFocus: true,
              className: "toaster success",
            })
            .showToast();
        }
      });
    } catch (error) {
      if (window.Toastify) {
        window
          .Toastify({
            text: "Failed to copy email",
            duration: 2000,
            gravity: "bottom",
            position: "center",
            stopOnFocus: true,
            className: "toaster error",
          })
          .showToast();
      }
    }
  };

  return (
    <SidebarContainer>
      <Box>
        <ImgBox>
          <ProfileImg src="/images/Profile.jpg" alt="profile" />
        </ImgBox>
        <Subtitle>Dmytrii Parfeniuk</Subtitle>
        <ProfessionText>Fullstack Developer</ProfessionText>
        <Socials />
      </Box>

      <Box>
        <Subtitle>Contacts</Subtitle>
        <Contacts>
          <ContactItem>
            <ContactLabel>Phone:</ContactLabel>
            <ContactLink
              href="tel:+380956912134"
              target="_blank"
              rel="noopener noreferrer"
            >
              +38(095)69-12-134
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Telegram:</ContactLabel>
            <ContactLink
              href="https://t.me/dmitrijparfenjuk"
              target="_blank"
              rel="noopener noreferrer"
            >
              +38(095)69-12-134
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Email:</ContactLabel>
            <ContactLink
              href="mailto:dimaparfenyk1990@gmail.com"
              title="Click to copy the email"
              onClick={handleEmailClick}
            >
              dimaparfenyk1990@gmail.com
            </ContactLink>
          </ContactItem>
        </Contacts>
        <Address>
          <ContactLabel>Address:</ContactLabel>
          Donetsk, Russia
        </Address>
      </Box>

      <Box>
        <Subtitle>Languages</Subtitle>
        <List>
          <ListItem>Russian</ListItem>
          <ListItem>English</ListItem>
        </List>
      </Box>

      <Box>
        <Subtitle>Tech Skills</Subtitle>
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
          Download CV
        </a>
      </Button>
    </SidebarContainer>
  );
};

export default Sidebar;
