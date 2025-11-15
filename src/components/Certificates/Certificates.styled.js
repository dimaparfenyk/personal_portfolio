import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CertificatesSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 72px;

  @media screen and (max-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  color: ${theme.colors.titleDark};

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const SectionText = styled.p`
  max-width: 560px;
  margin-bottom: 48px;
  font-size: 16px;
  line-height: 1.24;
  letter-spacing: 0.16px;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 24px;
    font-size: 14px;
  }
`;

export const CertificatesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    gap: 15px;
  }

  @media screen and (max-width: 480px) {
    gap: 12px;
    flex-direction: column;
  }
`;

export const CertificateItem = styled.li`
  flex-basis: calc(33.333% - 40px);
  padding: 4px;
  border-radius: 8px;
  box-shadow: rgba(49, 21, 4, 0.07) 7px 4px 14px;
  background-color: ${theme.colors.primaryBg};
  transition: 0.3s all ease-in-out;

  &:hover {
    box-shadow: 0 0 12px;
  }

  @media screen and (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
  }

  @media screen and (max-width: 768px) {
    flex-basis: calc(50% - 15px);
  }

  @media screen and (max-width: 480px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

export const CertificateLink = styled.a`
  overflow: hidden;
`;

export const CertificateImg = styled.img`
  width: 100%;
  aspect-ratio: 7 / 6;
  object-fit: cover;
`;
