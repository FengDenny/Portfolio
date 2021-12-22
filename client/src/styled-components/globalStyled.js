import styled, { createGlobalStyle, keyframes } from "styled-components";
import { MediaQueries } from "./styled";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
a {
    list-style-type: none ;
    text-decoration: none ;
  }

html,body{
    background:var(--bg-color);
    font-family:var(--primary-font);
}
body{
    overflow-x:hidden;
}
:root{
    --bg-color: #F6F9FC;
    --primary-color: #333333;
    --primary-color-hover: #2E2E2E;
    --secondary-color: #0B95AB;  
    --white-color:#fff;
    --data-suvery-color: #7796FE;
    --primary-font: 'Nunito', sans-serif;
    --border-radius: 10px;
    --drop-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    --text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    --span-text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
   
  
}
`;

export const theme = {
  fontWeight: "bold",
  fontWeightRegular: "200",
  fontSizeXSM: "18px",
  fontSizeSM: "20px",
  fontSizeMD: "30px",
  fontSizeLG: "40px",
  fontSizeHero: "100px",
  primaryColor: "var(--primary-color)",
  secondaryColor: "var(--secondary-color)",
  height: "100vh",
  justifyContent: "space-between",
  width: "120px",
  buttonHeight: "30px",
  flexDirection: "column",
  flexDirectionRow: "row",
};

// Type Effect

const type = keyframes`
0% {
    width: 0;
  }
  99.9% {
    border-right: .1em solid var(--primary-color);
  }
  100% {
    border: none;
  }
  @-webkit-keyframes type {
    0% {
      width: 0;
    }
    99.9% {
      border-right: .1em solid var(--primary-color);
    }
    100% {
      border: none;
    }
  }
`;
const type2 = keyframes`
0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .1em solid var(--primary-color);
  }
  100% {
    opacity: 1;
    border: none;
  }
  
  @-webkit-keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: .1em solid var(--primary-color);
    }
    100% {
      opacity: 1;
      border: none;
    }
}
`;
const type3 = keyframes`
to   { visibility: visible; }
  
  @-webkit-keyframes type3 {
    to   { visibility: visible; }
  }
`;

// Containers
export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    "main main main main"
    "content content content content"
    "footer footer footer footer";
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
`;

// Headings/ Paragraphs/ Span
export const H1 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) => props.theme.primaryColor};
`;
export const HeroH1 = styled(H1)`
  font-size: ${(props) => props.theme.fontSizeHero};
  text-shadow: var(--text-shadow);
  // animation start
  width: 100%;
  -webkit-animation: ${type} 2s steps(40, end);
  animation: ${type} 2s steps(40, end);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  border-right: 0.1em solid var(--primary-color);
  white-space: nowrap;
  overflow: hidden;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-weight: ${(props) => props.theme.fontWeightRegular};
  font-size: ${(props) => props.theme.fontSizeMD};
  padding-top: 1rem;
  margin-left: 0.5rem;
  //animation start
  width: 45rem;
  opacity: 0;
  -webkit-animation: ${type2} 2s steps(40, end);
  animation: ${type2} 2s steps(40, end);
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  border-right: 0.1em solid var(--primary-color);
  white-space: nowrap;
  overflow: hidden;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.secondaryColor};
  text-shadow: var(--span-text-shadow);
  font-weight: ${(props) => props.theme.fontWeight};
`;

// Button

export const ButtonPrimary = styled.button`
  position: relative;
  top: 0.2rem;
  font-size: ${(props) => props.theme.fontSizeXSM};
  background: ${(props) => props.theme.primaryColor};
  color: var(--white-color);
  border: 1px solid var(--primary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--drop-shadow);

  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.buttonHeight};
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.secondaryColor};
    border: 1px solid var(--secondary-color);
  }
  ${MediaQueries("laptop")`
  margin-top: 0.5rem;
  left: 1rem;
  position: relative;
  `}
`;

// Flex
export const DisplayFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.flexDirection};
`;

export const DisplayFlexRow = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.flexDirectionRow};
`;

// Hero
export const HeroLink = styled.a`
  position: relative;
  font-size: ${(props) => props.theme.fontSizeMD};
  color: ${(props) => props.theme.primaryColor};
  font-weight: ${(props) => props.theme.fontWeight};
  padding: 1rem;
  width: 70px;
  top: 5px;
  :hover {
    color: var(--secondary-color);
  }
  //   animations
  visibility: hidden;
  animation: ${type3} 0s 4s forwards;
`;
