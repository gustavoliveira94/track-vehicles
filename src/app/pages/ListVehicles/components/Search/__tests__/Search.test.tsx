import { fireEvent } from '@testing-library/react';

import { render } from 'config/tests/helpTester';

import { Search } from 'app/pages/ListVehicles/components/Search';

describe('Testing <Search /> Component', () => {
  it('Should write on input search', () => {
    const { getByTestId } = render(<Search />);

    fireEvent.change(getByTestId('input-search'), {
      target: { value: 'Veículo 1' },
    });

    expect(getByTestId('input-search')).toHaveValue('Veículo 1');
  });
});
