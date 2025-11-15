import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CertificatesSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 72px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  color: ${theme.colors.titleDark};
`;

const SectionText = styled.p`
  max-width: 560px;
  margin-bottom: 48px;
  font-size: 16px;
  line-height: 1.24;
  letter-spacing: 0.16px;
`;

const CertificatesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const CertificateItem = styled.li`
  flex-basis: calc(33.333% - 40px);
  padding: 4px;
  border-radius: 8px;
  box-shadow: rgba(49, 21, 4, 0.07) 7px 4px 14px;
  background-color: ${theme.colors.primaryBg};
  transition: 0.3s all ease-in-out;

  &:hover {
    box-shadow: 0 0 12px;
  }
`;

const CertificateLink = styled.a`
  overflow: hidden;
`;

const CertificateImg = styled.img`
  width: 100%;
  aspect-ratio: 7 / 6;
  object-fit: cover;
`;

const certificates = [
  '/images/certificates/JS-Full-Stack-Developer-1.png',
  '/images/certificates/html-1.png',
  '/images/certificates/js-2.0-1.png',
  '/images/certificates/js-OOP-1.png',
  '/images/certificates/js-arr-methods-1.png',
  '/images/certificates/js-functions-1.png',
  '/images/certificates/react-1.png',
  '/images/certificates/node-1.png',
];

const Certificates = () => {
  const lightboxRef = useRef(null);

  useEffect(() => {
    // Ждем загрузки SimpleLightbox из глобального объекта
    const initLightbox = () => {
      if (window.SimpleLightbox) {
        const links = document.querySelectorAll('.certificates__link');
        if (links.length > 0 && !lightboxRef.current) {
          lightboxRef.current = new window.SimpleLightbox('.certificates__link', {
            captions: true,
            captionPosition: 'bottom',
            animation: 'fade',
            animationSpeed: 250,
            showCounter: true,
            nav: true,
            keyboardNav: true,
            close: true,
            closeButton: true,
            captionDelay: 250,
            scale: 1,
            padding: 10,
          });
        }
      }
    };

    // Проверяем, загружен ли SimpleLightbox
    if (window.SimpleLightbox) {
      initLightbox();
    } else {
      // Если еще не загружен, ждем события загрузки
      window.addEventListener('load', initLightbox);
    }

    return () => {
      if (lightboxRef.current && typeof lightboxRef.current.destroy === 'function') {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
      window.removeEventListener('load', initLightbox);
    };
  }, []);

  return (
    <CertificatesSection>
      <SectionTitle>Certificates</SectionTitle>
      <SectionText>
        Here are the certificates I've earned while expanding my skills in web
        development and related technologies.
      </SectionText>
      <CertificatesList>
        {certificates.map((cert, index) => (
          <CertificateItem key={index}>
            <CertificateLink
              href={cert}
              className="certificates__link"
            >
              <CertificateImg src={cert} alt="certificate" />
            </CertificateLink>
          </CertificateItem>
        ))}
      </CertificatesList>
    </CertificatesSection>
  );
};

export default Certificates;

