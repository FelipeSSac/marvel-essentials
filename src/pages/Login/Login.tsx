import { MarvelLogo } from '../../components/Atom/MarvelLogo';

import { LoginMainComponent } from './styles';

export default function Login() {
  return (
    <LoginMainComponent>
      <div className="login__gradient">
        <div className="login-container">
          <MarvelLogo className="login__logo" />
          <form action="" className="login__form">
            <h1 className="login__title">Bem-Vindo(a) de volta!</h1>
            <label className="login__input-text__label" htmlFor="username">Acesse por meio do seu GitHub:</label>
            <input className="login__input-text" placeholder="Usuário do GitHub" type="text" />
            <div className="login__check-button-container">
              <label className="login__check-save__label">
                <input className="login__check-save" type="checkbox" />
                <span>Salvar login</span>
              </label>
              <button className="login__button-forget" type="button">Esqueci a senha</button>
            </div>
            <button className="login__button-submit" type="submit">Entrar</button>
            <p className="login__paragraph-register">
              Ainda não tem um Login?
              <a className="login__anchor-register" href="https://github.com/join">Cadastre-se</a>
            </p>
          </form>
        </div>
      </div>
    </LoginMainComponent>
  );
}
