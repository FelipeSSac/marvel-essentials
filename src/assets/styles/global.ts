import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: Marvel;
    src: url('../fonts/Marvel/MarvelRegular-Dj83.ttf');
  }

  @font-face {
    font-family: Axiforma;
    src: url('../fonts/Axiforma/*.otf') format('truetype');
  }

  *{
    margin: 0;
    padding: 0;
    font-family: Axiforma, sans-serif;
  }

  html {
    min-width: 300px;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
