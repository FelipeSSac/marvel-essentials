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

  .section-movies__select__option{
    width: 100%;
    padding: 0 0.87rem;
    margin-top: 0.1rem;

    background: transparent;
    color: #f00;
    text-align: left;
    border: 0;
    line-height: 2.5rem;
    font-size: 1.125rem;
    z-index: 3;
  }

  .section-movies__select__icon{
    width: 1rem;

    position: absolute;
    top: 0.93rem;
    right: 1rem;
    z-index: 2;
  }

  .section-movies__select-container{
    width: 10.6rem;
    height: 2.6rem;

    position: absolute;
    top: 4vh;
    left: 10vw;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: 2px solid #f00;
    background-color: #000;
    color: #f00;
    font-size: 16.2rem;
    border-radius: 8px;
    transition: height 0.2s ease;
    overflow: hidden;
  }

  .show-select-box{
    height: 7.8rem;
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

  @media (min-width: 300px) and (max-width:768px) {
    .article--show-details{
      .article-hero-container, .article-movie-container, .article-comic-container{
      width: 100%;
      height: 100%;

      top: 0;
      left: 0;

        .article-hero__image, .article-movie__image, .article-comic__image{
          width: 100%;
          position: absolute;
        }

        .article-hero__details, .article-movie__details, .article-comic__details{
          width: 95vw;
          height: 100vh;
          padding-left: 5vw;
          margin: 0;
          z-index: 2;

          border-radius: 2rem;
          background: linear-gradient(rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.2));
        }
      }
    }

    .button-toggle-show{
      display: none;
    }
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
