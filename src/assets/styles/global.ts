import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: Marvel;
    src: url('../fonts/Marvel/marvel.ttf') format('ttf');
  }

  @font-face {
    font-family: Axiforma;
    src: url('../../fonts/*.otf') format('otf'),
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

  @media (min-width: 961px) and (max-width:1271px){
    html{
      font-size: 13px;
    }
  }

  @media (min-width: 768px) and (max-width:960px){
    html{
      font-size: 11px;
    }
  }

  @media (min-width: 300px) and (max-width:768px){
    html{
      font-size: 9px;
    }
  }
`;
