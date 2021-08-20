import { createGlobalStyle } from 'styled-components';

import Marvel1 from '../fonts/marvel-webfont.woff';
import Marvel2 from '../fonts/marvel-webfont.woff2';

import Axiforma1 from '../fonts/axiforma-webfont.woff';
import Axiforma2 from '../fonts/axiforma-webfont.woff2';

import AxiformaBold1 from '../fonts/axiformabold-webfont.woff';
import AxiformaBold2 from '../fonts/axiformabold-webfont.woff2';

import AxiformaLighter1 from '../fonts/axiformalight-webfont.woff';
import AxiformaLighter2 from '../fonts/axiformalight-webfont.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Marvel';
    src: url(${Marvel2}) format('woff2'),
         url(${Marvel1}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Axiforma';
    src: url(${Axiforma2}) format('woff2'),
          url(${Axiforma1}) format('woff');
    font-weight: normal;
    font-style: normal;
  }


  @font-face {
    font-family: 'Axiforma';
    src: url(${AxiformaBold2}) format('woff2'),
          url(${AxiformaBold1}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Axiforma';
    src: url(${AxiformaLighter2}) format('woff2'),
          url(${AxiformaLighter1}) format('woff');
    font-weight: lighter;
    font-style: normal;
  }

  *{
    margin: 0;
    padding: 0;
    font-family: "Axiforma", sans-serif;
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
      font-size: 14px;
    }
  }

  @media (min-width: 768px) and (max-width:960px){
    html{
      font-size: 13px;
    }
  }

  @media (min-width: 300px) and (max-width:768px){
    html{
      font-size: 12px;
    }
  }
`;
