import { render } from 'config/tests/helpTester';

import { Vehicle } from 'contracts/vehicles';

import { Map } from 'app/pages/ListVehicles/components/Map';

import vehiclesData from './vehicles.json';

let vehicles = [] as unknown as Vehicle[];

jest.mock('core/hooks/useVehicles', () => ({
  useVehicles: () => ({
    vehicles,
  }),
}));

describe('Testing >Map /> Component', () => {
  it('Should render vehicle on map', () => {
    vehicles = vehiclesData;

    const { getAllByTestId } = render(<Map />);

    expect(getAllByTestId('vehicle-marker')).toHaveLength(2);
  });
});
