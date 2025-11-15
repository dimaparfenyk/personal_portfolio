import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SidebarContainer = styled.aside`
  max-width: 305px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  padding: 50px 16px 24px;
  background-color: ${theme.colors.primaryBg};

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
    padding: 30px 16px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const ImgBox = styled.div`
  margin-bottom: 32px;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: auto;
`;

export const Subtitle = styled.h3`
  color: ${theme.colors.titleDark};
  margin: 0 auto 16px;
`;

export const ProfessionText = styled.p`
  margin: 0 auto 16px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
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

export const Contacts = styled.ul`
  margin-bottom: 10px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactLabel = styled.span`
  display: inline-block;
  min-width: 90px;
  margin-bottom: 4px;
  margin-right: 10px;
  padding: 2px 6px 2px 4px;
  color: ${theme.colors.titleDark};
  background-color: ${theme.colors.highlight};

  @media screen and (max-width: 480px) {
    min-width: 70px;
    font-size: 12px;
    padding: 2px 4px;
  }
`;

export const ContactLink = styled.a`
  word-break: break-all;
  overflow-wrap: break-word;
`;

export const Address = styled.address`
  font-style: normal;
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
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 24px;
    font-size: 12px;
  }
`;
