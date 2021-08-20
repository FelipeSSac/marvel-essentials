import { MarvelLogo } from '../../components/Atom/MarvelLogo';
import { LoginForm } from '../../components/Organism/LoginForm';

import { LoginMainComponent } from './styles';

export default function Login() {
  return (
    <LoginMainComponent>
      <div className="login__gradient">
        <div className="login-container">
          <MarvelLogo className="login__logo" />
          <LoginForm />
        </div>
      </div>
    </LoginMainComponent>
  );
}
