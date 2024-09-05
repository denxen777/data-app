import { DataState } from '../types.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { IData, ResponseData } from '../../../api/types.ts';

export const addedDataPending = (state: DataState) => {
  state.isLoading = true;
};

export const addedDataFulfilled = (
  state: DataState,
  action: PayloadAction<ResponseData<IData>>,
) => {
  const { data, error_text, error_code } = action.payload;

  if (error_text) {
    state.error_text = error_text;
  }

  if (error_code === 0) {
    state.error_text = null;
    state.data?.push(data);
  }

  state.isLoading = false;
};

export const addedDataRejected = (state: DataState) => {
  state.isLoading = false;
};
