import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import httpClient from 'core/services/httpClient';
import { calculateDistance } from 'core/utils/calculateDistance';

import {
  selectVehicles,
  setVehicles,
  selectSearchVehicles,
} from 'core/store/slices/vehicles';
import { Vehicle } from 'contracts/vehicles';

export const useVehicles = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector(selectVehicles);
  const { searchVehicles, isSearching } = useSelector(selectSearchVehicles);

  const getVehicles = async () => {
    try {
      const { vehicles: vehiclesData } = await httpClient.get<{
        vehicles: Vehicle[];
      }>('/api/vehicles');

      return dispatch(setVehicles(vehiclesData));
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getVehicles();
  }, []);

  return {
    vehicles: calculateDistance({ list: vehicles }),
    searchVehicles: calculateDistance({ list: searchVehicles }),
    isSearching,
  };
};
