import { DataState } from '../types.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { IData, ResponseData } from '../../../api/types.ts';

export const updateDataPending = (state: DataState) => {
  state.isLoading = true;
};

export const updateDataFulfilled = (
  state: DataState,
  action: PayloadAction<ResponseData<IData>>,
) => {
  const { data, error_text, error_code } = action.payload;

  if (error_text) {
    state.error_text = error_text;
  }

  if (error_code === 0) {
    state.error_text = null;
    state.data = (state.data as IData[]).map((val) =>
      val.id === data.id ? data : val,
    );
  }

  state.isLoading = false;
};

export const updateDataRejected = (state: DataState) => {
  state.isLoading = false;
  state.error_text = 'Что-то пошло не так, попробуйте перезагрузить страницу';
};
