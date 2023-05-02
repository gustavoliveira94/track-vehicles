import { waitFor } from '@testing-library/react';

import { render } from 'config/tests/helpTester';

import { List } from 'app/pages/ListVehicles/components/List';
import { Vehicle } from 'contracts/vehicles';

import vehiclesData from './vehicles.json';

let vehicles = [] as unknown as Vehicle[];
let isSearching = false;
let searchVehicles = [] as unknown as Vehicle[];

jest.mock('core/hooks/useVehicles', () => ({
  useVehicles: () => ({
    vehicles,
    isSearching,
    searchVehicles,
  }),
}));

describe('Testing <List /> Component - ListVehicles', () => {
  vehicles = vehiclesData;

  it('Should render vehicles on list', () => {
    const { getAllByTestId } = render(<List />);

    expect(getAllByTestId('vehicle')).toHaveLength(2);
  });

  it('Should render search result on list', () => {
    isSearching = true;
    searchVehicles = [vehicles[0]];

    const { getAllByTestId } = render(<List />);

    expect(getAllByTestId('vehicle')).toHaveLength(1);
  });

  it('Should not render vehicles on list', () => {
    const { findByTestId } = render(<List />);

    waitFor(() => expect(findByTestId('vehicle')).not.toBeInTheDocument());
  });
});
