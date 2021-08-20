import styled from 'styled-components';

import endgame from '../../assets/images/endgame-bg.jpg';

export const LoginMainComponent = styled.main`
  width: 100%;
  height: 100vh;

  background: linear-gradient(100deg, #000 40%, rgba(255, 255, 255, 0)) 5%, url(${endgame}) no-repeat;
  background-position: right top;
  background-size: auto 90rem;
  color: #fff;
  overflow: hidden;

  .login__gradient{
    width: 100%;
    height: 100%;

    background: #000;

    animation-name: toggleBackground;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }

  .login-container{
    width: 100%;
    max-width: 1120px;
    padding-top: 10rem;

    animation-name: showMarvel;
    animation-duration: 3s;
  }

  .login__logo{
    width: 350px;
    height: 145px;
    margin: 0 auto;

    font-size: 160px;
  }

  @keyframes showMarvel {
    0% {
      transform: translate(calc(50vw - 35rem), 50rem);
      opacity: 0;
    }
    30%{
      opacity: 1;
      transform: translate(calc(50vw - 35rem), 20vh);
    }
  }

  @keyframes showMarvelMobile {
    0% {
      transform: translate(0, 50rem);
      opacity: 0;
    }
    30%{
      opacity: 1;
      transform: translate(0, 20vh);
    }
  }

  @keyframes toggleBackground {
    from {
      background-color: #000;
    }
    to {
      background-color: transparent;
    }
  }

  @media (max-width:1000px){
    .login-container{
      animation-name: showMarvelMobile;
    }
  }

`;
