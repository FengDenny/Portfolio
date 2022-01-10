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
    text-decoration: none ;
  }

li {
    list-style:none;
  }

html{
    scroll-behavior: smooth;
  }

html,body{
    background:var(--bg-color);
    font-family:var(--primary-font);

}

.green {
  border: 1px solid var(--success);
}

.white{
  border:1px solid var(--white-color);
}

.none {
  display: none;
}

:root{
    --bg-color: #F6F9FC;
    --primary-color: #333333;
    --primary-color-hover: #2E2E2E;
    --secondary-color: #0B95AB;  
    --secondary-color-hover: #097283;  
    --white-color:#fff;
    --white-hover: #EAEAEA;
    --data-suvery-color: #7796FE;
    --data-suvery-color-hover: #4E65B5;
    --success: #35c03a;
    --error: #ed455d;
    --primary-font: 'Nunito', sans-serif;
    --secondary-font :'Gorditas', cursive;
    --border-radius: 10px;
    --drop-shadow: 2px 2px 10px 3px rgba(0,0,0,0.1);
    --text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    --span-text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    --font-size-sm:18px;
    --font-size-mobile: 14px;
    --font-size-md: 30px;
    --font-size-lg: 48px;
    --font-size-22: 22px;
    --font-size-40:40px;
    --margin-left-5: 5px;
    --width-100:100%;

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
  width0: "0",
  height0: "0",
  lineHeight: "0",
  buttonHeight: "30px",
  flexDirection: "column",
  flexDirectionRow: "row",
  bottom: "10rem",
  right: "0",
  left: "0",
  top: "0",
  marginTop: "10px",
  marginLeft: "0",
  marginLeftSM: "0.5rem",
  marginRight: "0",
  paddingTop: "1rem",
  translate: " translate(-50%, -50%)",
};

// Containers
export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 0.45fr auto 1fr auto auto auto;
  grid-template-areas:
    "nav nav"
    "main main"
    "about about"
    "project project "
    "technical technical"
    "contact contact"
    "footer footer";
  grid-template-columns: 100%;
  grid-gap: 0.2rem;
  transition: all 0.25s ease-in-out;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100%;
  padding: 0;
  .nav-brand {
    margin-left: 10px;
  }

  ${MediaQueries("laptop")`
  grid-template-columns: 100%;
  grid-template-rows: auto 0.45fr auto 1fr auto auto auto;
  grid-template-areas:
  "nav"
  "main"
  "about"
  "project "
  "technical"
  "contact"
  "footer";
 `}
  ${MediaQueries("mobileL")`
  max-width:1400px;
  grid-template-rows:  0.1fr 0.15fr 0.20fr 1fr auto  0.35fr 0.1fr;
 `} 
  ${MediaQueries("mobileM")`

  grid-template-rows:  0.1fr 0.40fr 0.20fr 1fr auto 0.35fr 0.1fr;
 `}
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 261px 469px 144px;
  grid-gap: 1rem;
  justify-content: space-evenly;
  padding-top: 3rem;
  transition: all 1s;
  ${MediaQueries("laptop")`
  display:flex;
  flex-direction: column;
`};
`;

export const GridContainerRow = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(171px, 1fr));
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
    font-size: 3.5em;
   `}
  ${MediaQueries("mobileL")`
   font-size:1.9em;
   `}
`;
export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizeMD};
  text-shadow: var(--text-shadow);
  color: ${(props) => props.theme.primaryColor};
  ${(props) =>
    props.mobile &&
    MediaQueries("mobileL")`
    font-size:var(--font-size-mobile)
    `}

  ${(props) =>
    props.header &&
    MediaQueries("desktop")`
    width: 67rem;
      `}  
      
      ${(props) =>
    props.header &&
    MediaQueries("laptop")`
      width: 32rem;
      font-size:var( --font-size-40)
      `} 
      
  ${(props) =>
    props.header &&
    MediaQueries("mobileL")`
    font-size:23px;
    width: 22rem;
    `}
`;

export const GorditasH2 = styled(H2)`
  text-shadow: none !important;
  font-family: var(--secondary-font);
  margin-left: ${(props) => props.theme.marginLeft};
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-weight: ${(props) => props.theme.fontWeightRegular};
  font-size: ${(props) => props.theme.fontSizeMD};
  padding-top: ${(props) => props.theme.paddingTop};
  margin-left: ${(props) => props.theme.marginLeftSM};
  margin-right: ${(props) => props.theme.marginRight};
  ${MediaQueries("laptop")`
    font-size: 25px;
   `};

  ${MediaQueries("mobileL")`
   font-size:var(--font-size-sm);
   `}
`;

export const ParagraphSM = styled(Paragraph)`
  margin-top: 0.5rem;
  width: ${(props) => props.theme.width0};
  line-height: ${(props) => props.theme.lineHeight};

  ${MediaQueries("laptop")`
font-size:var(--font-size-sm);
`};

  ${(props) =>
    props.pmobile &&
    MediaQueries("laptop")`
  margin-right: 2rem;
  margin-left: 0.7rem;
  margin-top: 0.5rem;
  line-height: 27px;
     width: 30rem;
  `}

  ${(props) =>
    props.pmobile &&
    MediaQueries("mobileL")`
    margin-right: 3rem;
    margin-left: 2.3rem;
    margin-top: 0.5rem;
    line-height: 27px;
    width: 21rem;
  `}
  ${(props) =>
    props.amobile &&
    MediaQueries("laptop")`
    margin-top:3rem;
       left: 8rem;
    position: relative;
    line-height: 46px;
    width: calc(100% - 267px);
  `}
  
  ${(props) =>
    props.amobile &&
    MediaQueries("mobileL")`
    width: calc(10px + 85%);
    left:0;
    margin-top:3rem;
  `}
  ${(props) =>
    props.card &&
    MediaQueries("tablet")`
    font-size:var(--font-size-mobile) !important;

  `}
  ${(props) =>
    props.card &&
    MediaQueries("mobileL")`
    margin-left: 0rem;

  `}  
    ${(props) =>
    props.card &&
    MediaQueries("mobileS")`
    font-size:13px !important;
    width:17rem !important;

  `}  
  
  ${(props) =>
    props.contact &&
    MediaQueries("laptop")`
    padding: 10px 0;

  `}
 
  ${(props) =>
    props.contact &&
    MediaQueries("mobileL")`
    width: 20rem;
    font-size: 14px;
    margin-right: 46px;

  `}
`;

export const Span = styled.span`
  color: ${(props) => props.theme.secondaryColor};
  text-shadow: var(--span-text-shadow);
  font-weight: ${(props) => props.theme.fontWeight};
`;

export const FaSpan = styled.span`
  color: ${(props) => props.theme.secondaryColor};
  font-size: ${(props) => props.theme.fontSizeMD};
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

export const PositionRelative = styled.div`
  position: relative;
  top: ${(props) => props.theme.top};
  bottom: ${(props) => props.theme.bottom};
  right: ${(props) => props.theme.right};
  left: ${(props) => props.theme.left};

  ${(props) =>
    props.description &&
    MediaQueries("mobileL")`
    top:0.3rem;
  `}
`;
export const PositionAbsolute = styled.div`
  position: absolute;
  top: ${(props) => props.theme.top};
  bottom: ${(props) => props.theme.bottom};
  right: ${(props) => props.theme.right};
  left: ${(props) => props.theme.left};
  transform: ${(props) => props.theme.transform};

  ${(props) =>
    props.laptop === true
      ? MediaQueries("laptop")`
      bottom: 0rem;
      right: 35%;
  }
  `
      : null}
`;
export const PositionCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PositionRelativeMQ = styled.div`
  ${MediaQueries("laptop")`
bottom: 7rem;
left: 6rem;
position: relative;
`}

  ${MediaQueries("mobileL")`
left: 3rem;
`}
`;

export const MarginTop = styled(motion.div)`
  position: relative;
  margin-top: ${(props) => props.theme.marginTop};
`;

// Flex

export const DisplayFlex = styled(motion.div)`
  display: flex;
  flex-direction: ${(props) => props.theme.flexDirection};
`;

export const Article = styled(motion.article)`
  ${MediaQueries("laptop")`
  display:flex;
  `}
`;

export const DisplayFlexRow = styled(motion.div)`
  display: flex;
  flex-direction: ${(props) => props.theme.flexDirectionRow};

  ${(props) =>
    props.mobile &&
    MediaQueries("laptop")`
      flex-direction:column-reverse;
  `}
`;

export const DisplayFlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;
export const DisplayFlexStart = styled.div`
  display: flex;
  justify-content: start;

  ${(props) =>
    props.mobile
      ? MediaQueries("laptop")`
  justify-content:center
  `
      : null}
`;
export const JustifyContent = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.flexDirectionRow};
  justify-content: ${(props) => props.theme.justifyContent};

  ${(props) =>
    props.form
      ? MediaQueries("laptop")`
   margin-left:15px
  `
      : null}

  ${(props) =>
    props.form
      ? MediaQueries("mobileL")`
   margin-left:-5px
  `
      : null}
`;
// grid

export const GridTwo = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 11rem);
  grid-gap: 14px;

  ${MediaQueries("mobileL")`
  grid-template-columns: repeat(2, 9rem);
 `}
`;

// HR
export const HRLine = styled.hr`
  width: ${(props) => props.theme.width};
  border: 1px solid var(--primary-color);
`;

// Card

export const Card = styled(motion.div)`
  dispay: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid var(--primary-color);
  background: var(--primary-color);
  padding: 1rem;
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  position: relative;
  box-shadow: var(--drop-shadow);
  h4 {
    font-size: 15px;
    padding-top: 4px;
    height: 2rem;
  }
  .banner {
    background: var(--secondary-color);
    color: var(--white-color);
    position: relative;
    bottom: 18px;
    right: 1.1rem;
    border-radius: 5px;
    width: 25rem;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
  }

  ${MediaQueries("laptop")`
    width: 27rem;
    right:1rem;
    margin-top:1rem;

    .banner {
      width: 27rem;
    }
 `}

  ${MediaQueries("mobileL")`
    width: 21rem;
    right:2rem;
    .banner {
      width: 21rem;
      font-size: 10px;
    }
 `}
`;

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

export const MobileContainer = styled(motion.div)`
  ${(props) =>
    props.mobile
      ? MediaQueries("laptop")`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    right:0.5rem;
`
      : null}

  ${(props) =>
    props.contact
      ? MediaQueries("laptop")`
    right:1.5rem;
`
      : null}
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
  width: 35rem;
    height: 100%;
   `}

  ${MediaQueries("mobileL")`
  width:23rem;
   padding: 39px;
   margin-left: 8px;
   `}
  ${MediaQueries("mobileM")`
  width:21rem;
   padding: 30px;

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
    width: ${({ mobilewidth }) => mobilewidth || "322px"};
    box-shadow: ${({ imgshadow }) => imgshadow || "none"};
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
    color: ${({ pcolor }) => pcolor || "#fff"};
    line-height: ${({ lineheight }) => lineheight || "35px"};
  }

  ${MediaQueries("laptop")`
  width: 490px;
  padding: 55px;
    flex-direction:column;

    h2{
      text-align:center;
    }

    .odd{
      width: calc(100% + 3px);
    } 
    
    .even{
      width: calc(100% + 100px);
      text-align: start;
      position:relative;
      right:30px;
      padding: 13px !important;
    } 
   `}

  ${MediaQueries("mobileL")`
  width: 385px;

  img{
    width:350px;
    margin-left:12px;
  }


  .even{
    font-size:14px;
    width: calc(100% + 61px);
  }
   `};
  ${MediaQueries("mobileM")`
  width: 350px;

  img{
    width:300px;
    margin-left:12px;
  }
  .odd{
    width: calc(100% + 16px);
    font-size:14px;
  } 
  

  .even{
    width: calc(100% + 48px);
    right:19px;
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
    color: ${({ hovercolor }) => hovercolor || "var(--primary-color)"};
    border: 2px solid ${({ border }) => border || "#fff"};
    background: ${({ hoverbg }) => hoverbg || "#FFF"};
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
export const ProjectLink = styled(motion.button)`
  position: relative;
  font-size: ${(props) => props.theme.fontSizeMD};
  color: ${({ color }) => color || "#fff"};
  font-weight: ${(props) => props.theme.fontWeight};
  padding: 1rem;
  width: 70px;
  top: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: ${({ hovercolor }) => hovercolor || "var(--white-hover)"};
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
     left:67%
   `};
  ${MediaQueries("tablet")`
     left:72%
   `};

  ${MediaQueries("mobileL")`
     display:none ;
   `};
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
    right:-10%;
 `};
  ${MediaQueries("tablet")`
    right:-5%;
 `};
  ${MediaQueries("mobileL")`
     display:none ;
   `};
`;

// Technical

export const TechnicalContainer = styled(HeroCardContainer)`
  flex-direction: column;
  height: 74rem;
`;

export const Circles = styled(motion.div)`
  background: var(--white-color);
  border-radius: 50%;
  height: 125px;
  width: 125px;
  margin-top: 1rem;
  box-shadow: var(--drop-shadow);
  overflow: ${(props) => (props.about ? "hidden" : undefined)};
  ${MediaQueries("laptop")`
  margin: 2rem;
  `};
  ${MediaQueries("mobileL")`
   margin: 0.5rem;
   width:100px;
   height:100px;
   position:relative;
   right:10px;
  `};
  ${(props) =>
    props.mobile
      ? MediaQueries("laptop")`
   margin:auto;
  `
      : null}
`;
export const CardImage = styled.img`
  width: ${({ width }) => width || "4.5rem"};
  height: auto;
  align-items: center;
  margin-top: 1.5rem;
  ${(props) =>
    props.mobile
      ? MediaQueries("mobileL")`
   width:4.2rem;
  `
      : MediaQueries("mobileL")`
  width:3.8rem;
 `}
`;
export const Image = styled.img`
  position: relative;
  width: ${({ width }) => width || "4.5rem"};
  height: auto;
  align-items: center;
  bottom: ${({ bottom }) => bottom || "14.5rem"};
  left: ${({ left }) => left || "0.5rem"};
  ${(props) =>
    props.mobile
      ? MediaQueries("mobileL")`
   width:19.2rem;
  `
      : MediaQueries("mobileL")`
  width:3.8rem;
 `};
`;

export const FormTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizeSM};
  color: var(--white-color);
  font-weight: ${(props) => props.theme.fontWeight};
`;

export const FormLabel = styled.label`
  padding-top: 1rem;
  font-size: ${(props) => props.theme.fontSizeSM};
  color: var(--white-color);
  font-weight: ${(props) => props.theme.fontWeight};
  display: flex;
  flex-direction: row;
`;

export const ErrorFormLabel = styled(FormLabel)`
  font-size: var(--font-size-mobile);
  color: var(--error);
  height: 1rem;
  position: relative;
  bottom: 14px;
`;

export const FormInput = styled.input`
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  font-size: ${(props) => props.theme.fontSizeMD};
  border: 1px solid var(--white-color);
  border-radius: 5px;
  background: transparent;
  color: var(--white-color);
  padding-left: 0.5rem;
  ${(props) =>
    props.mobile
      ? MediaQueries("mobileL")`
   width:19rem;
  `
      : null};
  ${(props) =>
    props.error
      ? "border: 1px solid var(--error)"
      : "border: 1px solid var(--white-color);"}
`;
export const FormTextArea = styled.textarea`
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  font-size: ${(props) => props.theme.fontSizeMD};
  border: 1px solid var(--white-color);
  border-radius: 5px;
  background: transparent;
  color: var(--white-color);
  resize: none;
  padding: 0.5rem;
  ${(props) =>
    props.mobile
      ? MediaQueries("mobileL")`
   width:19rem;
  `
      : null};
  ${(props) =>
    props.error
      ? "border: 1px solid var(--error)"
      : "border: 1px solid var(--white-color);"}
`;

export const FormButton = styled(motion.button)`
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  background: var(--secondary-color);
  box-shadow: var(--drop-shadow);
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
  color: var(--white-color);
  font-size: ${(props) => props.theme.fontSizeSM};
  font-weight: ${(props) => props.theme.fontWeight};

  :hover {
    background: var(--secondary-color-hover);
    border: 1px solid var(--secondary-color-hover);
  }
  ${(props) =>
    props.mobile
      ? MediaQueries("mobileL")`
   width:19rem;
  `
      : null};
`;

// Scroll Button

export const TopScrollButton = styled(motion.button)`
  position: relative;
  top: 5rem;
  right: 5rem;
  border: none;
  background: var(--secondary-color);
  cursor: pointer;
  font-size: 3rem;
  border-radius: 5px;
  height: 3rem;
  width: 3rem;
  color: var(--white-color);
  box-shadow: var(--drop-shadow);
  svg {
    filter: drop-shadow(var(--drop-shadow));
  }

  ${MediaQueries("laptop")`
    margin:auto;
    left:0;
    top:0;

  `};
`;
