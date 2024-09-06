import { DataState } from '../types.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { IData, ResponseData } from '../../../api/types.ts';

export const removeDataPending = (state: DataState) => {
  state.isLoading = true;
};

export const removeDataFulfilled = (
  state: DataState,
  action: PayloadAction<ResponseData & { id: string }>,
) => {
  const { id, error_text, error_code } = action.payload;

  if (error_text) {
    state.error_text = error_text;
  }

  if (error_code === 0) {
    state.error_text = null;
    state.data = (state.data as IData[]).filter((val) => val.id !== id);
  }

  state.isLoading = false;
};

export const removeDataRejected = (state: DataState) => {
  state.isLoading = false;
  state.error_text = 'Что-то пошло не так, попробуйте перезагрузить страницу';
};
