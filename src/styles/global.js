import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Arial,sans-serif;
  }

body, #root {
  font: 14px Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.Black};
  overflow: auto;
  overscroll-behavior: contain !important;
}

a {
  text-decoration: none;
}
  
ul {
  list-style: none;
}

button {
  cursor: pointer;
  outline: none;
}
`;
