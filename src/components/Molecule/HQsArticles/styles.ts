import styled from 'styled-components';

export const HQArticleContainer = styled.article`
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

  .article-hq__image{
    object-fit: cover;
    width: 101%;
    height: 100%;
    z-index: -1;
  }

  .article-hq__description{
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

  .article-hq__name{
    font-size: 1.5rem;
    font-weight: bold;
  }

  .article-hq__about{
    width: 90%;
    font-size: 0.9rem;
  }

  .article-hq__button{
    border: 0;
    background: transparent;
    font-size: 1.3rem;
    font-weight: lighter;
    color: #fff;
  }
`;
