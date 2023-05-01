import { configureStore } from '@reduxjs/toolkit';

import vehicles from 'core/store/slices/vehicles';

export const store = configureStore({
  reducer: {
    vehicles,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
