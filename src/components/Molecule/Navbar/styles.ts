import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 50rem;
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

  @media (min-width: 621px) and (max-width:1025px){
    width: 40rem;
    margin-left: 1rem;
  }

  @media (min-width: 300px) and (max-width:620px){
    width: 100%;

    .nav__link{
      font-size: 1.4rem;
    }
  }
`;
