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
  overflow: hidden;

  background: linear-gradient(100deg, #000 40%, rgba(255, 255, 255, 0)) 5%, url(${endgame}) no-repeat;
  background-color: #ccc;
  background-position: right top;
  background-size: auto 90rem;
  color: #fff;

  .main-content__section{
    width: calc(100% -5.5rem);
    height: 100%;
    padding-left: 5.5rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15rem;

    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .button-toggle-show{
    width: 3.2rem;
    position: absolute;

    background: transparent;
    border: 0;

    transition: opacity 0.2s ease, visibility 0.2s ease;
    opacity: 1;
    visibility: visible;

    svg{
      width: 100%;
      height: 100%;

      fill: #f00;
    }
  }

  .section__button-toggle-show--prev{
    left: 3.5rem;
  }

  .section__button-toggle-show--next{
    right: 3.5rem;
  }

  .button-toggle-show--hide {
    opacity: 0;
    visibility: hidden;
  }


  @keyframes onShow {
    from {
      transform: translate(-5px, 10px);
      opacity: 0;
    }
    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;
