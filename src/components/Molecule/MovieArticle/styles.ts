import styled from 'styled-components';

export const MovieArticleContainer = styled.section`
  width: 25rem;
  height: 35rem;

  border-radius: 2rem;
  flex: none;
  transition: all 0.2s ease;
  overflow: hidden;
  scroll-snap-align: end;

  animation-name: onShow;
  animation-duration: 0.4s;
  animation-timing-function: ease;

  &:hover {
    box-shadow: 0 0 20px #FF0000;
  }

  .article-movie__image{
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .article-movie__description{
    height: calc(42.5% - 3.2rem);
    padding: 1.8rem 0 1.8rem 0;
    position: relative;
    top: calc(-42.5% - 1rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    text-align: center;
    border-radius: 2rem;
    background: linear-gradient(red, rgba(255, 0, 0, 0.2));
  }

  .article-movie__name{
    font-size: 1.5rem;
    font-weight: bold;
  }

  .article-movie__about{
    width: 90%;
    font-size: 0.9rem;
  }

  .article-movie__button{
    border: 0;
    background: transparent;
    font-size: 1.3rem;
    font-weight: lighter;
    color: #fff;
  }
`;