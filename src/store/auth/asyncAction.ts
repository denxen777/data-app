import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../api/authServices';
import {LoginForm} from "../../pages/Login/types.ts";

export const reqLogin = createAsyncThunk('login', async (data: LoginForm) => {
  const res = await login(data);
  return res.data;
});
