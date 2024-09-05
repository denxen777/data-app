import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reqLogin } from './asyncAction';
import { AuthState } from './types.ts';
import { loginFulfilled, loginPending, loginRejected } from './actions.ts';

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error_text: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuth = false;
    },
    updateIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(reqLogin.pending, loginPending);
    addCase(reqLogin.fulfilled, loginFulfilled);
    addCase(reqLogin.rejected, loginRejected);
  },
});

export const { logout, updateIsAuth } = authSlice.actions;

export default authSlice.reducer;
