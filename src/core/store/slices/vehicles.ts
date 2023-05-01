import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Vehicle } from 'contracts/vehicles';

import { RootState } from 'core/store';

interface VehiclesState {
  vehicles: Vehicle[];
  searchVehicles: Vehicle[];
  isSearching: boolean;
}

const initialState: VehiclesState = {
  vehicles: [],
  searchVehicles: [],
  isSearching: false,
};

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles: (state, action: PayloadAction<Vehicle[]>) => {
      return {
        ...state,
        vehicles: action.payload,
      };
    },
    searchVehicle: (state, action: PayloadAction<string>) => {
      const search = action.payload;

      if (!search) {
        return {
          ...state,
          isSearching: false,
          searchVehicles: [],
        };
      }

      return {
        ...state,
        isSearching: true,
        searchVehicles: state.vehicles.filter((vehicle) => {
          return vehicle.identifier
            .toLowerCase()
            .includes(search.toLowerCase());
        }),
      };
    },
  },
});

export const { setVehicles, searchVehicle } = vehiclesSlice.actions;

export const selectVehicles = (state: RootState) => state.vehicles.vehicles;
export const selectSearchVehicles = (state: RootState) => ({
  searchVehicles: state.vehicles.searchVehicles,
  isSearching: state.vehicles.isSearching,
});

export default vehiclesSlice.reducer;
