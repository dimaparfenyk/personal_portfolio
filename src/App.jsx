import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import { Container, FlexWrapper } from "./components/Container";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";

const MainContainer = styled.div`
  width: 100%;
  padding-bottom: 72px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
    </ThemeProvider>
  );
};

export default App;
