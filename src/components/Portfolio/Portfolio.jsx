import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import {
  PortfolioSection,
  SectionTitle,
  SectionText,
  PortfolioList,
  PortfolioItem,
  PortfolioLink,
  PortfolioImg,
  CardTitle,
  GitHubLink,
} from "./Portfolio.styled";

const Portfolio = () => {
  const { t } = useTranslation();

  const portfolioItems = [
    {
      id: 1,
      titleKey: "pet",
      image: "/images/portfolio/pets-app.jpg",
      link: "https://petly-cvix.onrender.com/",
      github: "https://github.com/dimaparfenyk/petly",
      alt: "Pet application screenshot",
    },
    {
      id: 2,
      titleKey: "filmoteka",
      image: "/images/portfolio/filmoteka.jpg",
      link: "https://dimaparfenyk.github.io/myfilmoteka/",
      github: "https://github.com/dimaparfenyk/myfilmoteka",
      alt: "Filmoteka movie library screenshot",
    },
    {
      id: 3,
      titleKey: "school",
      image: "/images/portfolio/vixon.jpg",
      link: "https://dimaparfenyk.github.io/school-vixon/",
      github: "https://github.com/dimaparfenyk/school-vixon",
      alt: "Educational school website screenshot",
    },
    {
      id: 4,
      titleKey: "iceCream",
      image: "/images/portfolio/ice-cream.jpg",
      link: "https://zigo72200.github.io/-itd19/",
      github: "https://github.com/dimaparfenyk/ice-cream",
      alt: "Ice cream company website screenshot",
    },
  ];

  return (
    <PortfolioSection>
      <SectionTitle>{t("portfolio.title")}</SectionTitle>
      <SectionText>{t("portfolio.description")}</SectionText>
      <PortfolioList>
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.id}>
            <PortfolioLink
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${t(
                `portfolio.projects.${item.titleKey}`
              )} in a new tab`}
            >
              <PortfolioImg src={item.image} alt={item.alt} />
              <CardTitle>{t(`portfolio.projects.${item.titleKey}`)}</CardTitle>
            </PortfolioLink>
            <GitHubLink
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon icon-github"
            />
          </PortfolioItem>
        ))}
      </PortfolioList>
    </PortfolioSection>
  );
};

export default Portfolio;
