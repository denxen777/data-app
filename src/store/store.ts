import { combineSlices, configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import dataSlice from './data/dataSlice';

const rootReducer = combineSlices({
  authSlice,
  dataSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
