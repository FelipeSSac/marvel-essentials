import { FormEvent, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../../store';

import { EnsureToken } from '../../../helpers/ensurers';
import { useGithubUser } from '../../../helpers/hooks';

import { LoginFormContainer } from './styles';

interface ILoginFormData {
  githubUser: string;
  saveUser: boolean;
}

export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginFormData, setLoginFormData] = useState({} as ILoginFormData);
  const [loginFormError, setLoginFormError] = useState(false);

  async function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userExists = await useGithubUser(loginFormData.githubUser);

    if (!userExists) {
      setLoginFormError(true);
    } else {
      setLoginFormError(false);
      const token = EnsureToken(loginFormData.githubUser);

      if (loginFormData.saveUser) {
        localStorage.setItem('marvelEssentialToken', token);
      }

      dispatch({
        type: ActionTypes.LoginUser,
        token,
        user: {
          githubUser: loginFormData.githubUser,
        },
      });
      history.push('/');
    }
  }

  return (
    <LoginFormContainer onSubmit={handleLoginSubmit}>
      <h1 className="login__title">Bem-Vindo(a) de volta!</h1>
      <label className="login__input-text__label" htmlFor="username">Acesse por meio do seu GitHub:</label>
      <input
        id="username"
        className={`login__input-text${loginFormError ? (' input-text--error') : ('')}`}
        placeholder="Usuário do GitHub"
        value={loginFormData.githubUser}
        onChange={(event) => setLoginFormData((prevState) => ({
          ...prevState,
          githubUser: event.target.value,
        }))}
        type="text"
        required
      />
      <div className="login__check-button-container">
        <label className="login__check-save__label">
          <input
            className="login__check-save"
            type="checkbox"
            name="save"
            value={loginFormData.saveUser ? 'true' : 'false'}
            onChange={(event) => setLoginFormData((prevState) => ({
              ...prevState,
              saveUser: event.target.checked,
            }))}
          />
          <span>Salvar login</span>
        </label>
        <button className="login__button-forget" type="button">Esqueci a senha</button>
      </div>
      <button className="login__button-submit" type="submit">Entrar</button>
      <p className="login__paragraph-register">
        Ainda não tem um Login?
        <a className="login__anchor-register" href="https://github.com/join">Cadastre-se</a>
      </p>
    </LoginFormContainer>
  );
}
