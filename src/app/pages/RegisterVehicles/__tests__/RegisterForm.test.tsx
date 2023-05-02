import { fireEvent, waitFor } from '@testing-library/react';

import { render } from 'config/tests/helpTester';

import { RegisterVehicles } from 'app/pages/RegisterVehicles/';

const createVehicle = jest.fn();

jest.mock('core/hooks/useCreateVehicle', () => ({
  useCreateVehicle: () => ({
    createVehicle,
  }),
}));

describe('Testing <RegisterVehicles /> Page', () => {
  it('Should show errors', async () => {
    const { getByTestId, getAllByText } = render(<RegisterVehicles />);

    const button = getByTestId('button-register');
    fireEvent.click(button);

    await waitFor(() => {
      expect(getAllByText(/é um campo obrigatório!/)).toHaveLength(6);
      expect(createVehicle).toBeCalledTimes(0);
    });
  });

  it('Should not show errors', async () => {
    const { getByTestId, getByRole } = render(<RegisterVehicles />);

    fireEvent.change(
      getByRole('textbox', {
        name: /identificador/i,
      }),
      {
        target: { value: 'Veículo 1' },
      },
    );
    fireEvent.change(
      getByRole('textbox', {
        name: /placa/i,
      }),
      {
        target: { value: 'AAA9A91' },
      },
    );
    fireEvent.change(
      getByRole('textbox', {
        name: /número de série/i,
      }),
      {
        target: { value: 'B0000000' },
      },
    );

    fireEvent.change(document.querySelector('input[name="status"]')!, {
      target: { value: 'Em funcionamento' },
    });

    fireEvent.change(
      getByRole('textbox', {
        name: /latitude/i,
      }),
      {
        target: { value: '-25.43244' },
      },
    );
    fireEvent.change(
      getByRole('textbox', {
        name: /longitude/i,
      }),
      {
        target: { value: '-49.27855' },
      },
    );

    const button = getByTestId('button-register');
    fireEvent.click(button);

    await waitFor(() =>
      expect(createVehicle).toHaveBeenCalledWith({
        coordinates: {
          latitude: '-25.43244',
          longitude: '-49.27855',
        },
        identifier: 'Veículo 1',
        license_plate: 'AAA9A91',
        status: 'Em funcionamento',
        tracker_serial_number: 'B0000000',
      }),
    );
  });
});
