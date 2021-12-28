import styled, { createGlobalStyle, keyframes } from "styled-components";
import { MediaQueries } from "./MediaQueries.styled";
import { motion, Variants } from "framer-motion";
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
  fontSizeHero: "90px",
  primaryColor: "var(--primary-color)",
  secondaryColor: "var(--secondary-color)",
  bgColor: "var(--bg-color)",
  height: "100vh",
  justifyContent: "space-between",
  width: "120px",
  buttonHeight: "30px",
  flexDirection: "column",
  flexDirectionRow: "row",
  bottom: "10rem",
  marginTop: "10px",
};

// Containers
export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 0.2fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    "main main main main"
    "content content content content"
    "footer footer footer footer";
  grid-gap: 0.2rem;
  transition: all 0.25s ease-in-out;
  max-width: 1000px;
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

  ${MediaQueries("laptop")`
    font-size: 4.5em;
   `}
`;
export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizeMD};
  text-shadow: var(--text-shadow);
  color: ${(props) => props.theme.primaryColor};
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-weight: ${(props) => props.theme.fontWeightRegular};
  font-size: ${(props) => props.theme.fontSizeMD};
  padding-top: 1rem;
  margin-left: 0.5rem;
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

// Positioning
export const PositionBottomRelative = styled.div`
  position: relative;
  bottom: ${(props) => props.theme.bottom};
`;

export const MarginTop = styled(motion.div)`
  position: relative;
  margin-top: ${(props) => props.theme.marginTop};
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

export const DisplayFlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

// HR
export const HRLine = styled.hr`
  width: ${(props) => props.theme.width};
  border: 1px solid var(--primary-color);
`;

// Card

export const HeroCardContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CardContainer = styled(HeroCardContainer)`
  flex-direction: column;
`;

export const HeroCard = styled(motion.div)`
  width: 900px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.bgColor};
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 70%;
  padding: 27px;

  ${MediaQueries("laptop")`
    width:calc(100vw - 200px);
    height: calc(100% - 200px);
   `}
`;

export const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  algin-items: center;
  background-color: ${({ background }) => background || "var(--bg-color)"};
  border-radius: 10px;
  box-shadow: ${({ shadow }) => shadow || "none"};
  margin: 40px 0;
  padding: 60px;
  width: 900px;
  z-index: 2;
  img {
    width: ${({ mobileWidth }) => mobileWidth || "322px"};
    box-shadow: ${({ imgShadow }) => imgShadow || "none"};
    margin-top: 15px;
    border-radius: 10px;
  }
  & > div {
    flex: 1;
  }
  h2 {
    text-align: ${({ align }) => align || "flex-start"};
    color: ${({ color }) => color || "#fff"};
  }
  p {
    width: ${({ width }) => width || "406px"};
    margin: ${({ margin }) => margin || "0px"};
    font-size: ${(props) => props.theme.fontSizeSM};
    color: ${({ pColor }) => pColor || "#fff"};
    line-height: ${({ lineHeight }) => lineHeight || "35px"};
  }

  ${MediaQueries("laptop")`
  width: calc(100vw - 188px);
    flex-direction:column;

    h2{
      text-align:center;
    }

    .odd{
      width: calc(100vw - 285px); 
    } 
    
    .even{
      width: calc(100vw - 92px); 
      position: relative;
      right:109px;
    } 
   `}
`;

export const CardButton = styled(motion.button)`
  position: relative;
  background-color: ${({ background }) => background || "var(--bg-color)"};
  color: ${({ color }) => color || "#fff"};
  border: 2px solid ${({ border }) => border || "#fff"};
  display: flex;
  justify-content: center;
  width: 150px;
  height: 30px;
  margin: ${({ margin }) => margin || "0px"};
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSizeSM};
  font-weight: ${(props) => props.theme.fontWeight};
  cursor: pointer;

  :hover {
    color: ${({ hoverColor }) => hoverColor || "var(--primary-color)"};
    border: 2px solid ${({ border }) => border || "#fff"};
    background: ${({ hoverBG }) => hoverBG || "#FFF"};
  }
  ${MediaQueries("laptop")`
  margin:auto;

 `}
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
`;

// Diamond
export const DiamondStyle = styled(motion.div)`
  height: 150px;
  width: 150px;
  background-color: #7fdbff;
  transform: rotate(45deg);
  position: ${({ position }) => position || "absolute"};
  right: ${({ right }) => right || "0"};
  top: ${({ top }) => top || "32px"};
  box-shadow: ${({ shadow }) => shadow || "var(--drop-shadow)"};
  background-color: ${({ background }) =>
    background || "var(--secondary-color)"};

  ${MediaQueries("laptop")`
      right:31px;
   `}
`;

export const DiamondStyleTwo = styled(motion.div)`
  height: 150px;
  width: 150px;
  background-color: #7fdbff;
  transform: rotate(45deg);
  position: ${({ position }) => position || "relative"};
  right: ${({ right }) => right || "0"};
  bottom: ${({ bottom }) => bottom || "131px"};
  box-shadow: ${({ shadow }) => shadow || "var(--drop-shadow)"};
  background-color: ${({ background }) =>
    background || "var(--secondary-color)"};

  ${MediaQueries("laptop")`
    left:31px;
 `}
`;
