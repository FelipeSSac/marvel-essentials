import { Route } from 'react-router-dom';

// import PrivateRoutes from './privateRoutes';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export default function Router() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact={false} path="/login" component={Login} />
    </>
  );
}
