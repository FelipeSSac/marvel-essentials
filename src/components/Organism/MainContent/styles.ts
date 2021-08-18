import styled from 'styled-components';

import endgame from '../../../assets/images/endgame-bg.jpg';

export const MainContentContainer = styled.main`
  position: absolute;
  top: 8rem;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 2rem;
  z-index: -1;

  background: linear-gradient(100deg, #000 40%, rgba(255, 255, 255, 0)) 5%, url(${endgame}) no-repeat;
  background-color: #ccc;
  background-position: right top;
  background-size: auto 90rem;
  color: #fff;
`;
