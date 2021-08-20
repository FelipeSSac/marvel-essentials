import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoutes from './privateRoutes';

import { Heroes } from '../pages/Heroes';
import { Movies } from '../pages/Movies';
import { Comics } from '../pages/Comics';

import { Login } from '../pages/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoutes exact path="/" component={Heroes} />
        <PrivateRoutes path="/movies" component={Movies} />
        <PrivateRoutes path="/comics" component={Comics} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
