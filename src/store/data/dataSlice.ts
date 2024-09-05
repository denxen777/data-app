import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IData } from '../../api/types';
import {
  reqAddData,
  reqAllData,
  reqRemoveData,
  reqUpdateData,
} from './asyncAction';
import { DataState } from './types.ts';
import {
  getAllDataFulfilled,
  getAllDataPending,
  getAllDataRejected,
} from './actions/getAllData.ts';
import {
  addedDataFulfilled,
  addedDataPending,
  addedDataRejected,
} from './actions/addedData.ts';
import {
  removeDataFulfilled,
  removeDataPending,
  removeDataRejected,
} from './actions/removeData.ts';
import {
  updateDataFulfilled,
  updateDataPending,
  updateDataRejected,
} from './actions/updateData.ts';

const initialState: DataState = {
  data: null,
  currentData: null,
  isLoading: false,
  error_text: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addCurrentData: (state, action: PayloadAction<IData>) => {
      state.currentData = action.payload;
    },
  },
  extraReducers({ addCase }) {
    addCase(reqAllData.pending, getAllDataPending);
    addCase(reqAllData.fulfilled, getAllDataFulfilled);
    addCase(reqAllData.rejected, getAllDataRejected);

    addCase(reqAddData.pending, addedDataPending);
    addCase(reqAddData.fulfilled, addedDataFulfilled);
    addCase(reqAddData.rejected, addedDataRejected);

    addCase(reqRemoveData.pending, removeDataPending);
    addCase(reqRemoveData.fulfilled, removeDataFulfilled);
    addCase(reqRemoveData.rejected, removeDataRejected);

    addCase(reqUpdateData.pending, updateDataPending);
    addCase(reqUpdateData.fulfilled, updateDataFulfilled);
    addCase(reqUpdateData.rejected, updateDataRejected);
  },
});

export const { addCurrentData } = dataSlice.actions;

export default dataSlice.reducer;
