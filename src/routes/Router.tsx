import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import PrivateRoutes from './privateRoutes';

import { Heroes } from '../pages/Heroes';
import { Movies } from '../pages/Movies';
import { HQs } from '../pages/HQs';

import { Login } from '../pages/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Heroes} />
        <Route path="/movies" component={Movies} />
        <Route path="/hqs" component={HQs} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
