import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LanguageSwitcherContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  gap: 8px;
  background-color: ${theme.colors.primaryBg};
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    top: 10px;
    right: 10px;
    padding: 6px;
  }
`;

export const LanguageButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) =>
    props.active ? theme.colors.highlight : "transparent"};
  color: ${(props) => (props.active ? "#fff" : theme.colors.titleDark)};

  &:hover {
    background-color: ${(props) =>
      props.active ? theme.colors.accentBg : "rgba(0, 0, 0, 0.05)"};
  }

  @media screen and (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;
