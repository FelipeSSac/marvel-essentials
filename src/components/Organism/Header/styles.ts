import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 8rem;
  padding: 0 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #000;
  box-shadow: 0 0 10px #FF0000;

  @media (min-width: 300px) and (max-width:620px){
    padding: 0 1rem;
  }
`;
