import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import httpClient from 'core/services/httpClient';

import { selectVehicles, setVehicles } from 'core/store/slices/vehicles';

export const useVehicles = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector(selectVehicles);

  const getVehicles = async () => {
    try {
      const { vehicles: vehiclesData } = await httpClient.get('/api/vehicles');

      return dispatch(setVehicles(vehiclesData));
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
