import { renderRouter, fireEvent, cleanup } from '../../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { Navbar } from '.';

afterEach(cleanup);

it('should user button have type equal button', () => {
  const { getByText } = renderRouter(<Navbar />);

  const userButton = getByText('Sair');

  expect(userButton).toHaveAttribute('type', 'button');
});

it('should set active to hero button', () => {
  const { getByText } = renderRouter(<Navbar />);

  const heroButton = getByText('Personagens');
  const movieButton = getByText('Filmes');
  const comicsButton = getByText('HQs');

  fireEvent.click(heroButton);

  expect(heroButton).toHaveClass('nav__link--active');
  expect(movieButton).not.toHaveClass('nav__link--active');
  expect(comicsButton).not.toHaveClass('nav__link--active');
});

it('should set active to movie button', () => {
  const { getByText } = renderRouter(<Navbar />);

  const heroButton = getByText('Personagens');
  const movieButton = getByText('Filmes');
  const comicsButton = getByText('HQs');

  fireEvent.click(movieButton);

  expect(heroButton).not.toHaveClass('nav__link--active');
  expect(movieButton).toHaveClass('nav__link--active');
  expect(comicsButton).not.toHaveClass('nav__link--active');
});

it('should set active to comics button', () => {
  const { getByText } = renderRouter(<Navbar />);

  const heroButton = getByText('Personagens');
  const movieButton = getByText('Filmes');
  const comicsButton = getByText('HQs');

  fireEvent.click(comicsButton);

  expect(heroButton).not.toHaveClass('nav__link--active');
  expect(movieButton).not.toHaveClass('nav__link--active');
  expect(comicsButton).toHaveClass('nav__link--active');
});
