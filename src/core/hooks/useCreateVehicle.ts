/* eslint-disable camelcase */
import httpClient from 'core/services/httpClient';

import { Vehicle } from 'contracts/vehicles';

export const useCreateVehicle = () => {
  const createVehicle = async ({
    identifier,
    license_plate,
    coordinates,
    tracker_serial_number,
    status,
  }: Vehicle) => {
    try {
      await httpClient.post('/api/vehicle', {
        data: {
          identifier,
          license_plate,
          tracker_serial_number,
          status,
          coordinates,
        },
      });
    } catch (e) {
      return e;
    }
  };

  return {
    createVehicle,
  };
};
