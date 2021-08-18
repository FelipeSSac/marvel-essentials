import { BrowserRouter } from 'react-router-dom';
// import { Router } from './routes';

import GlobalStyle from './assets/styles/global';
import { Home } from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Home />
    </BrowserRouter>
  );
}
