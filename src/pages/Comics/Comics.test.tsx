import { renderRouter, cleanup } from '../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { Comics } from '.';

afterEach(cleanup);

it('should ensure content type as comics', () => {
  const { getByTestId } = renderRouter(<Comics />);

  const mainContent = getByTestId('main-content--comics');

  expect(mainContent).toBeInTheDocument();
});
