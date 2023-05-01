import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Vehicle } from 'contracts/vehicles';

import { RootState } from '..';

interface VehiclesState {
  vehicles: Vehicle[];
}

const initialState: VehiclesState = {
  vehicles: [],
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
  },
});

export const { setVehicles } = vehiclesSlice.actions;

export const selectVehicles = (state: RootState) => state.vehicles.vehicles;

export default vehiclesSlice.reducer;
