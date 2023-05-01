import { useDispatch } from 'react-redux';

import { searchVehicle } from 'core/store/slices/vehicles';

export const useSearchVehicles = () => {
  const dispatch = useDispatch();

  const setSearchVehicles = async (search: string) => {
    dispatch(searchVehicle(search));
  };

  return {
    setSearchVehicles,
  };
};
