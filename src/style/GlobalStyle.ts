import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {margin: 0; padding: 0; box-sizing: border-box}

  html {
    background: white;
    button {
      font-family: 'Inter Tight', sans-serif;
      cursor: pointer;
    }
  }

  body {
    font-family: 'Inter Tight', sans-serif;
    font-size: 16px;
  }
`

export const Wrapper = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  background: white;
`;
