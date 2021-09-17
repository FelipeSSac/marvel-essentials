import { renderRouter, cleanup } from '../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { Heroes } from '.';

afterEach(cleanup);

it('should ensure content type as heroes', () => {
  const { getByTestId } = renderRouter(<Heroes />);

  const mainContent = getByTestId('main-content--heroes');

  expect(mainContent).toBeInTheDocument();
});
