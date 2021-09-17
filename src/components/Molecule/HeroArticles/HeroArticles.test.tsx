import { render, fireEvent, cleanup } from '../../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { HeroArticles } from '.';

afterEach(cleanup);

it('should add "article--show-details" class to first article element', () => {
  const { getAllByText, getAllByTestId } = render(<HeroArticles />);

  const openDetailsButton = getAllByText('Ver Detalhes')[0];
  const article = getAllByTestId('hero-article')[0];

  fireEvent.click(openDetailsButton);

  expect(article).toHaveClass('article--show-details');
});

it('should toggle "article--show-details" class to first article element', () => {
  const { getAllByText, getAllByTestId } = render(<HeroArticles />);

  const article = getAllByTestId('hero-article')[0];
  const openDetailsButton = getAllByText('Ver Detalhes')[0];
  const closeDetailsButton = getAllByTestId('hero-article__close-details')[0];

  fireEvent.click(openDetailsButton);

  expect(article).toHaveClass('article--show-details');

  fireEvent.click(closeDetailsButton);

  expect(article).not.toHaveClass('article--show-details');
});

it('should add "article--show-details" class to second article element', () => {
  const { getAllByText, getAllByTestId } = render(<HeroArticles />);

  const openDetailsButton = getAllByText('Ver Detalhes')[1];
  const article = getAllByTestId('hero-article')[1];

  fireEvent.click(openDetailsButton);

  expect(article).toHaveClass('article--show-details');
});

it('should toggle "article--show-details" class to second article element', () => {
  const { getAllByText, getAllByTestId } = render(<HeroArticles />);

  const article = getAllByTestId('hero-article')[1];
  const openDetailsButton = getAllByText('Ver Detalhes')[1];
  const closeDetailsButton = getAllByTestId('hero-article__close-details')[1];

  fireEvent.click(openDetailsButton);

  expect(article).toHaveClass('article--show-details');

  fireEvent.click(closeDetailsButton);

  expect(article).not.toHaveClass('article--show-details');
});
