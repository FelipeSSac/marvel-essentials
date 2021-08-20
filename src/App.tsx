import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store';

import { Router } from './routes';
import GlobalStyle from './assets/styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <Toaster
        position="top-right"
      />
      <GlobalStyle />
      <Router />
    </Provider>
  );
}
