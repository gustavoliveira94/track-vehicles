import { render } from '@testing-library/react';

import { Navigation } from 'app/components/Navigation';
import { MemoryRouter } from 'react-router';

describe('Testing <Navigation /> Component', () => {
  it('Should render add button', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <Navigation />
      </MemoryRouter>,
    );

    expect(getByTestId('add-button')).toBeInTheDocument();
  });

  it('Should render list button', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[{ pathname: '/register-vehicles' }]}>
        <Navigation />
      </MemoryRouter>,
    );

    expect(getByTestId('list-button')).toBeInTheDocument();
  });
});
