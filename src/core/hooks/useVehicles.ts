import { useEffect, useState } from 'react';

import httpClient from 'core/services/httpClient';

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<any[]>([]);

  const getVehicles = async () => {
    try {
      const { vehicles: vehiclesData } = await httpClient.get('/api/vehicles');

      return setVehicles(vehiclesData);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getVehicles();
  }, []);

  return {
    vehicles,
  };
};
