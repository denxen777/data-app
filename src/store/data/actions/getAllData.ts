import { DataState } from '../types.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { IData, ResponseData } from '../../../api/types.ts';

export const getAllDataPending = (state: DataState) => {
  state.isLoading = true;
};

export const getAllDataFulfilled = (
  state: DataState,
  action: PayloadAction<ResponseData<IData[]>>,
) => {
  const { data, error_code, error_text } = action.payload;

  if (error_text) {
    state.error_text = error_text;
  }

  if (error_code === 0) {
    state.error_text = null;
    state.data = data;
  }

  state.isLoading = false;
};

export const getAllDataRejected = (state: DataState) => {
  state.isLoading = false;
};
