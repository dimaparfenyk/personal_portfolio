import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Container, FlexWrapper } from "./components/Container";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

const MainContainer = styled.div`
  width: 100%;
  padding-bottom: 72px;
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LanguageSwitcher />
        <AppWrapper>
          <main>
            <Container>
              <FlexWrapper>
                <Sidebar />
                <MainContainer>
                  <Hero />
                  <Portfolio />
                  <Certificates />
                </MainContainer>
              </FlexWrapper>
            </Container>
          </main>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
