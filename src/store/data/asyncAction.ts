import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addData,
  getAllData,
  removeData,
  updateData,
} from '../../api/dataServices';
import { IData } from '../../api/types';

export const reqAllData = createAsyncThunk('getAllData', async () => {
  const res = await getAllData();
  return res.data;
});

export const reqAddData = createAsyncThunk('addData', async (data: IData) => {
  const res = await addData(data);
  return res.data;
});

export const reqRemoveData = createAsyncThunk(
  'removeData',
  async (id: string) => {
    const res = await removeData(id);
    return { id, ...res.data };
  },
);

export const reqUpdateData = createAsyncThunk(
  'updateData',
  async (data: IData) => {
    const res = await updateData(data);
    return res.data;
  },
);
