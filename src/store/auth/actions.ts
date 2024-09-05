import { AuthState } from './types.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { ResponseData, Token } from '../../api/types.ts';

export const loginPending = (state: AuthState) => {
  state.isLoading = true;
};

export const loginFulfilled = (
  state: AuthState,
  action: PayloadAction<ResponseData<Token>>,
) => {
  const { data, error_code, error_text } = action.payload;

  if (error_text) {
    state.error_text = error_text;
  }

  if (error_code === 0) {
    localStorage.setItem('token', data.token);
    state.isAuth = true;
    state.error_text = null;
  }

  state.isLoading = false;
};

export const loginRejected = (state: AuthState) => {
  state.isAuth = false;
  state.isLoading = false;
};
