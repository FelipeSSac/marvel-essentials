import styled from 'styled-components';

export const HeroesSectionContainer = styled.section`
  width: 105rem;
  height: 100%;
  margin-top: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .section-heroes__article-container{
    width: 25rem;
    height: 35rem;

    border-radius: 2rem;
    transition: all 0.2s ease;
    overflow: hidden;

    &:hover {
      box-shadow: 0 0 20px #FF0000;
    }
  }

  .section-heroes__article-image{
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .section-heroes__article-dt{
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

  .section-heroes__article-name{
    font-size: 1.5rem;
    font-weight: bold;
  }

  .section-heroes__article-about{
    width: 90%;
    font-size: 0.9rem;
  }

  .section-heroes__article-button{
    border: 0;
    background: transparent;
    font-size: 1.3rem;
    font-weight: lighter;
    color: #fff;
  }
`;
