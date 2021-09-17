import { renderRouter, cleanup } from '../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { Movies } from '.';

afterEach(cleanup);

it('should ensure content type as movies', () => {
  const { getByTestId } = renderRouter(<Movies />);

  const mainContent = getByTestId('main-content--movies');

  expect(mainContent).toBeInTheDocument();
});
