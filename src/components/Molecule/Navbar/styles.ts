import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 900px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__link{
    color: #707070;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
    transition: filter 0.2s ease, color 0.2s ease;

    &:hover {
      color: #fff;
      filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 1))
    }
  }

  .nav__link--active{
    color: #fff;
    pointer-events: none;
  }

  .nav__user-button{
    width: 7.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 0;
    background: transparent;
    color: #707070;
    font-size: 1.2rem;
    transition: filter 0.2s ease, color 0.2s ease;

    &:hover {
      color: #fff;
      filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 1))
    }
  }

  .nav__user-button__image{
    width: 4rem;
    border-radius: 4rem;
  }
`;
