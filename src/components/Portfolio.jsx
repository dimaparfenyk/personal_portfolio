import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const PortfolioSection = styled.section`
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

const PortfolioList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const PortfolioItem = styled.li`
  position: relative;
  flex-basis: calc(33.333% - 40px);
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgba(49, 21, 4, 0.07) 7px 4px 14px;
  background-color: ${theme.colors.primaryBg};
  transition: 0.3s all ease-in-out;

  &:hover {
    box-shadow: 0 0 12px;
  }
`;

const PortfolioLink = styled.a`
  display: block;
`;

const PortfolioImg = styled.img`
  margin-bottom: 10px;
  object-fit: cover;
  aspect-ratio: 3 / 4;
`;

const CardTitle = styled.h3`
  color: ${theme.colors.titleDark};
`;

const GitHubLink = styled.a`
  position: absolute;
  bottom: 6px;
  right: 6px;
  font-size: 28px;
  font-family: "social-icons";
  color: ${theme.colors.highlightText};
  transition: 0.3s all ease-in-out;

  &::before {
    content: "${theme.icons.github}";
  }

  &:hover,
  &:focus {
    color: ${theme.colors.accentBg};
  }
`;

const portfolioItems = [
  {
    id: 1,
    title: "Find your pet",
    image: "/images/portfolio/pets-app.jpg",
    link: "https://petly-cvix.onrender.com/",
    github: "https://github.com/dimaparfenyk/petly",
    alt: "Pet application screenshot",
  },
  {
    id: 2,
    title: "Filmoteka",
    image: "/images/portfolio/filmoteka.jpg",
    link: "https://dimaparfenyk.github.io/myfilmoteka/",
    github: "https://github.com/dimaparfenyk/myfilmoteka",
    alt: "Filmoteka movie library screenshot",
  },
  {
    id: 3,
    title: "Educational School",
    image: "/images/portfolio/vixon.jpg",
    link: "https://dimaparfenyk.github.io/school-vixon/",
    github: "https://github.com/dimaparfenyk/school-vixon",
    alt: "Educational school website screenshot",
  },
  {
    id: 4,
    title: "Ice Cream Company",
    image: "/images/portfolio/ice-cream.jpg",
    link: "https://zigo72200.github.io/-itd19/",
    github: "https://github.com/dimaparfenyk/ice-cream",
    alt: "Ice cream company website screenshot",
  },
];

const Portfolio = () => {
  return (
    <PortfolioSection>
      <SectionTitle>Portfolio</SectionTitle>
      <SectionText>
        A selection of my recent work. Clean code, modern design, and attention
        to user experience.
      </SectionText>
      <PortfolioList>
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.id}>
            <PortfolioLink
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.title} in a new tab`}
            >
              <PortfolioImg src={item.image} alt={item.alt} />
              <CardTitle>{item.title}</CardTitle>
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
