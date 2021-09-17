import { render, fireEvent, cleanup } from '../../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { MovieArticles } from '.';

afterEach(cleanup);

it('should add "article--show-details" class to first article element', () => {
  const { getAllByText, getAllByTestId } = render(<MovieArticles />);

  const openDetailsButton = getAllByText('Ver Detalhes')[0];
  const article = getAllByTestId('movie-article')[0];

  fireEvent.click(openDetailsButton);

  expect(article).toHaveClass('article--show-details');
});

it('should toggle "article--show-details" class to first article element', () => {
  const { getAllByText, getAllByTestId } = render(<MovieArticles />);

  const article = getAllByTestId('movie-article')[0];
  const openDetailsButton = getAllByText('Ver Detalhes')[0];
  const closeDetailsButton = getAllByTestId('movie-article__close-details')[0];

  fireEvent.click(openDetailsButton);

  expect(article).toHaveClass('article--show-details');

  fireEvent.click(closeDetailsButton);

  expect(article).not.toHaveClass('article--show-details');
});

it('should add "article--show-details" class to second article element', () => {
  const { getAllByText, getAllByTestId } = render(<MovieArticles />);

  const openDetailsButton = getAllByText('Ver Detalhes')[1];
  const article = getAllByTestId('movie-article')[1];

  fireEvent.click(openDetailsButton);

  expect(article).toHaveClass('article--show-details');
});

it('should toggle "article--show-details" class to second article element', () => {
  const { getAllByText, getAllByTestId } = render(<MovieArticles />);

  const article = getAllByTestId('movie-article')[1];
  const openDetailsButton = getAllByText('Ver Detalhes')[1];
  const closeDetailsButton = getAllByTestId('movie-article__close-details')[1];

  fireEvent.click(openDetailsButton);

  expect(article).toHaveClass('article--show-details');

  fireEvent.click(closeDetailsButton);

  expect(article).not.toHaveClass('article--show-details');
});
