import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Utils/Themes";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Router } from "react-router-dom";
import HeroSection from "./Components/Sections/HeroSection";
import Skills from "./Components/Sections/Skills";
import Experience from "./Components/Sections/Experience";
import Education from "./Components/Sections/Education";
import StyledStarCanvas from "./Components/Canvas/Stars";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import Footer from "./Components/Sections/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: white;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: 90vh;
`;

const Wrapper = styled.div`
  padding-bottom : 100px;
  background :linear-gradient(
  38.73deg,
  rgba(204 , 0 , 187 , 0.15) 0%,
  rgba(201 , 32 ,184 , 0) 50%
  ),
 
  linear-gradient(
  141.27deg,
   rgba( 0, 70 , 209, 0)50%,
   rgba(0, 70 , 209, 0.15) 100%
  )
  width : 100%;
  clip-path: polygon(0 0 , 100% 0 , 100% 100% , 30% 98% , 0 100%);
 `;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavBar />
        <Body>
          <StyledStarCanvas />
          <div>
            <HeroSection />
            <Wrapper>
              <Skills />
              {/* <Experience /> */}
            </Wrapper>
            <Projects />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}
 
export default App;
// ${({theme}) => theme.text_primary}
