import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

html,body{
    background:var(--bg-color);
    font-family:var(--primary-font);
}

:root{
    --bg-color: #F6F9FC;
    --primary-color: #333333
    --secondary-color: #0B95AB;
    --data-suvery-color: #7796FE;
    --primary-font: 'Nunito', sans-serif;
}
`;

export const theme = {
  fontWeight: "bold",
  fontSizeSm: "20px",
  fontSizeMD: "30px",
  primaryColor: "var(--primary-color)",
  secondaryColor: "var(--secondary-color)",
  height: "100vh",
  justifyContent: "space-between",
};
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

// Headings/ Paragraphs
export const H1 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) => props.theme.primaryColor};
`;

export const Paragraphs = styled.p`
color:${(props) => props.theme.primaryColor}
font-weight:${(props) => props.theme.fontWeight}
`;
