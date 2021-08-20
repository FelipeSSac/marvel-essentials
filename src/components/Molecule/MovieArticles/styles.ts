import styled from 'styled-components';

export const MovieArticleContainer = styled.section`
  border-radius: 2rem;
  flex: none;
  transition: all 0.2s ease;
  scroll-snap-align: end;

  animation-name: onShow;
  animation-duration: 0.4s;
  animation-timing-function: ease;

  /* Show card */

  &.article--show-details{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;

    border-radius: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(155deg, rgba(112,112,112,0.4) 0%, rgba(112,112,112,0.6) 100%);

    .article-movie-container{
      width: 55rem;

      position: relative;
      top: calc(50% - 17.5rem);
      left: calc(50vw - 27.5rem);

      display: flex;
      flex-wrap: wrap;

      background: linear-gradient(155deg, rgba(255,0,0,10) 0%, rgba(60,0,0,1) 100%);

      animation-name: onShow;
      animation-duration: 0.4s;
      animation-timing-function: ease;
    }

    .article-movie__image{
      width: 45%;

      display: inline-block;

      border-radius: 2rem;
    }

    .article-movie__details{
      width: 50%;
      margin-left: 5%;
      padding-top: 6rem;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2rem;

      border-radius: 2rem;
    }

    .article-movie__description{
      display: none;
    }
  }


  /* Show card end */


  /* Article container */

  .article-movie-container{
    width: 25rem;
    height: 35rem;

    border-radius: 2rem;
    overflow: hidden;

    transition: box-shadow 0.2s ease;

    &:hover {
      box-shadow: 0 0 20px #FF0000;
    }
  }

  .article-movie__image{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  /* description */

  .article-movie__description{
    height: calc(42.5% - 3.2rem);
    padding: 1.8rem 0 1.8rem 0;
    position: relative;
    top: -42.5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    text-align: center;
    border-radius: 2rem;
    background: linear-gradient(red, rgba(255, 0, 0, 0.2));
  }

  .article-movie__description--name{
    font-size: 1.5rem;
    font-weight: bold;
  }

  .article-movie__description--about{
    width: 90%;
    font-size: 0.9rem;
  }

  .article-movie__button--show-card{
    border: 0;
    background: transparent;
    font-size: 1.3rem;
    font-weight: lighter;
    color: #fff;
  }

  /* description end */

  /* details */

  .article-movie__details{
    display: none;
  }

  .article-movie__details--name{
    font-size: 2.4rem;
    font-weight: bold;
  }

  .article-movie__details--about{
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  .article-movie__star-title{
    font-weight: bold;
    font-size: 1.6rem;
  }

  .article-movie__details-star{
    width: 2.5rem;
    height: 2.5rem;
    fill: #ffe500;
  }

  .article-movie__details-star-empty{
    width: 2.5rem;
    height: 2.5rem;
    fill: #707070;
  }

  .article-movie__button--close-card{
    position: absolute;
    right: 2rem;
    bottom: 2rem;

    border: 0;
    background: transparent;
    font-size: 1.3rem;
    font-weight: lighter;
    color: #fff;

    svg{
      width: 2rem;
      height: 2rem;
    }
  }

  /* details end */

  /* Article container end*/

`;
