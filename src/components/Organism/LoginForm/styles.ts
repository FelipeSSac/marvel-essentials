import styled from 'styled-components';

import check from '../../../assets/images/checkicon.png';

export const LoginFormContainer = styled.form`
  width: 23.9rem;
  height: 30rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;

  background: transparent;
  color: white;
  opacity: 0;

  animation-name: toggleOpacity;
  animation-duration: 1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;

  .login__title{
    font-size: 1.875rem;
    color: #f00;
  }

  .login__input-text__label{
    font-size: 1.3rem;
    font-weight: lighter;
    color: #707070;
  }

  .login__input-text{
    height: 4rem;
    padding: 0.2rem 1rem 0 1rem;

    font-size: 1rem;
    font-weight: bold;
    border: 0;
    outline: none;
    border-radius: 20rem;
    transition: box-shadow 0.2s ease, border 0.2s ease;

    &:focus{
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.5)
    }

    &::placeholder{
      font-weight: lighter;
      color: #707070;
    }
  }

  .input-text--error{
    box-shadow: 0 0 0 4px red;

    &::placeholder{
      font-weight: lighter;
      color: #b70000;
    }
  }

  .login__check-button-container{
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .login__check-save__label{
    color: #707070;
    transition: color 0.2s ease;

    cursor: pointer;

    &:hover{
      color: #fff;
    }
  }

  .login__check-save{
    all: unset;
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 1rem;

    position: relative;
    top: 0.1rem;
    left: 0.7rem;
    display: inline-block;

    background: #fff;
    border: 1px solid #f00;
    transition: background-color 0.2s ease;

    &:checked{
      background-image: url(${check});
      background-color: #f00;
      border-color: #fff;
      background-size: contain;
    }
  }

  .login__button-forget{
    background: transparent;
    border: 0;
    border-bottom: 1px solid #f00;

    a{
      color: #707070;
      transition: color 0.2s ease;
      text-decoration: none;

      &:hover{
        color: #f00;
      }
    }
  }

  .login__button-submit{
    height: 4rem;
    padding-top: 0.2rem;

    background: #f00;
    color: #fff;
    font-size: 1.75rem;
    font-weight: bold;
    border: 0;
    border-radius: 20rem;
    transition: background 0.2s ease, color 0.2s ease;

    &:hover{
      background: #fff;
      color: #f00;
    }
  }

  .login__paragraph-register{
    text-align: center;
    color: #707070;
  }

  .login__anchor-register{
    margin-left: 0.4rem;
    display: inline;
    color: #f00;
    text-decoration: none;
  }

  @keyframes toggleOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
