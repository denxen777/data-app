
import { api } from './api';
import { ResponseData, Token } from './types';
import {LoginForm} from "../pages/Login/types.ts";

export const login = async (data: LoginForm) => {
  return await api.post<ResponseData<Token>>(
    '/ru/data/v3/testmethods/docs/login',
    data
  );
};
