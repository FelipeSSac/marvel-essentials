import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../store';

const renderWithRouter: FC = ({ children }) => (
  <BrowserRouter>
    <Provider store={store}>
      {children}
    </Provider>
  </BrowserRouter>
);

const routerCustomRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: renderWithRouter, ...options });

const renderWithRedux: FC = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const reduxCustomRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: renderWithRedux, ...options });

export * from '@testing-library/react';
export { routerCustomRender as renderRouter };
export { reduxCustomRender as render };
