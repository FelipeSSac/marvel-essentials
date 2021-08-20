import { Route, Redirect } from 'react-router-dom';

import jwt from 'jsonwebtoken';

import { useSelector } from 'react-redux';

import { ITokenPayload } from '../helpers/ensurers/EnsurePrevUser';
import { IState } from '../store';

function PrivateRoutes({ component: Component, path: Path, ...rest }: any) {
  const { token } = useSelector((store: IState) => store);

  function isSectionActive() {
    if (token === null) {
      return false;
    }
    const tokenPayLoad = jwt.decode(token) as ITokenPayload;

    if (tokenPayLoad === null) {
      return false;
    }
    const { iat } = tokenPayLoad;

    return !(iat <= 0);
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        isSectionActive() ? <Component {...props} /> : <Redirect to="/login" />
      )}
    />
  );
}

export default PrivateRoutes;
