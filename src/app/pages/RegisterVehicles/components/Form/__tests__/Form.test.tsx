import { fireEvent, waitFor } from '@testing-library/react';

import { render } from 'config/tests/helpTester';

import { Form } from 'app/pages/RegisterVehicles/components/Form';

const createVehicle = jest.fn();

jest.mock('core/hooks/useCreateVehicle', () => ({
  useCreateVehicle: () => ({
    createVehicle,
  }),
}));

describe('Testing <Form /> component - RegisterVehicles', () => {
  it('Should show errors', async () => {
    const { getByTestId, getAllByText } = render(<Form />);

    const button = getByTestId('button-register');
    fireEvent.click(button);

    await waitFor(() => {
      expect(getAllByText(/é um campo obrigatório!/)).toHaveLength(6);
      expect(createVehicle).toBeCalledTimes(0);
    });
  });

  it('Should not show errors', async () => {
    const { getByTestId, getByRole } = render(<Form />);

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
        target: { value: 'AAA-9A91' },
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
    fireEvent.change(
      getByRole('textbox', {
        name: /status/i,
      }),
      {
        target: { value: 'Em funcionamento' },
      },
    );
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
        license_plate: 'AAA-9A91',
        status: 'Em funcionamento',
        tracker_serial_number: 'B0000000',
      }),
    );
  });
});
