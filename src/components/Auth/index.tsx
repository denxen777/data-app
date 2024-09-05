import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { updateIsAuth } from '../../store/auth/authSlice.ts';
import { AuthProps } from './types.ts';

export const Auth: FC<AuthProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(updateIsAuth(true));
    }
  }, [dispatch]);

  return <>{children}</>;
};
