import styled from 'styled-components';

export const MarvelLogoContainer = styled.div`
  width: 135px;
  height: 50px;

  background-color: #FF0000;
  color: #fff;
  font-size: 60.8px;
  font-family: Marvel;
  text-transform: uppercase;
  text-align: center;
  outline: none;
  border: 0;

  @media (min-width: 300px) and (max-width:620px){
    &.header__logo{
      display: none;
    }
  }
`;
