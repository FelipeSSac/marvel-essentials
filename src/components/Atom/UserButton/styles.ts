import styled from 'styled-components';

export const UserButtonContainer = styled.button`
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

  .user-button__image{
    width: 4rem;
    border-radius: 4rem;
  }
`;
