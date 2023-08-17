import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.blueberry};
    color: ${(props) => props.theme.white};
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }
`
