import React, { useEffect, useRef } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import {
  CertificatesSection,
  SectionTitle,
  SectionText,
  CertificatesList,
  CertificateItem,
  CertificateLink,
  CertificateImg,
} from "./Certificates.styled";

const certificates = [
  "/images/certificates/JS-Full-Stack-Developer-1.png",
  "/images/certificates/html-1.png",
  "/images/certificates/js-2.0-1.png",
  "/images/certificates/js-OOP-1.png",
  "/images/certificates/js-arr-methods-1.png",
  "/images/certificates/js-functions-1.png",
  "/images/certificates/react-1.png",
  "/images/certificates/node-1.png",
];

const Certificates = () => {
  const { t } = useTranslation();
  const lightboxRef = useRef(null);

  useEffect(() => {
    // Ждем загрузки SimpleLightbox из глобального объекта
    const initLightbox = () => {
      if (window.SimpleLightbox) {
        const links = document.querySelectorAll(".certificates__link");
        if (links.length > 0 && !lightboxRef.current) {
          lightboxRef.current = new window.SimpleLightbox(
            ".certificates__link",
            {
              captions: true,
              captionPosition: "bottom",
              animation: "fade",
              animationSpeed: 250,
              showCounter: true,
              nav: true,
              keyboardNav: true,
              close: true,
              closeButton: true,
              captionDelay: 250,
              scale: 1,
              padding: 10,
            }
          );
        }
      }
    };

    // Проверяем, загружен ли SimpleLightbox
    if (window.SimpleLightbox) {
      initLightbox();
    } else {
      // Если еще не загружен, ждем события загрузки
      window.addEventListener("load", initLightbox);
    }

    return () => {
      if (
        lightboxRef.current &&
        typeof lightboxRef.current.destroy === "function"
      ) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
      window.removeEventListener("load", initLightbox);
    };
  }, []);

  return (
    <CertificatesSection>
      <SectionTitle>{t("certificates.title")}</SectionTitle>
      <SectionText>{t("certificates.description")}</SectionText>
      <CertificatesList>
        {certificates.map((cert, index) => (
          <CertificateItem key={index}>
            <CertificateLink href={cert} className="certificates__link">
              <CertificateImg src={cert} alt="certificate" />
            </CertificateLink>
          </CertificateItem>
        ))}
      </CertificatesList>
    </CertificatesSection>
  );
};

export default Certificates;
