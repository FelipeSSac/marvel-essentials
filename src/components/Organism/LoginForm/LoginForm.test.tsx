import { render, fireEvent, cleanup } from '../../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { LoginForm } from '.';

afterEach(cleanup);

it('should login with github user', () => {
  const { getByTestId } = render(<LoginForm />);

  const input = getByTestId('login-username-input');
  const submitButton = getByTestId('login-button');

  fireEvent.change(input, { target: { value: '0' } });
  fireEvent.click(submitButton);

  expect(input).not.toHaveClass('input-text--error');
});

it('should input be required', () => {
  const { getByTestId } = render(<LoginForm />);

  const input = getByTestId('login-username-input');

  expect(input).toHaveAttribute('required');
});

it('should anchor "forget password" href pointer be github`s help page', () => {
  const { getByText } = render(<LoginForm />);

  const anchor = getByText('Esqueci a senha');

  expect(anchor).toHaveAttribute('href', 'https://github.com/password_reset');
});

it('should anchor "register" href pointer be github`s create account page', () => {
  const { getByText } = render(<LoginForm />);

  const anchor = getByText('Cadastre-se');

  expect(anchor).toHaveAttribute('href', 'https://github.com/join');
});
