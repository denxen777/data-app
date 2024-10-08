import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { AlertError } from '../../components/AlertError/index.tsx';
import { Loader } from '../../components/Loader/index.tsx';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { reqLogin } from '../../store/auth/asyncAction.ts';
import { LoginForm } from './types.ts';

export const Login = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>();

  const { isAuth, isLoading, error_text } = useAppSelector(
    (state) => state.authSlice
  );

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    dispatch(reqLogin(data));
  };

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <>
      {isLoading && <Loader open={isLoading} />}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{ width: 550 }}
          raised
          component='form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <CardHeader title='Авторизация' />
          <Divider sx={{ mb: 2 }} />
          <CardContent>
            <Stack spacing={2}>
              <TextField
                label='Логин'
                type='text'
                size='small'
                error={Boolean(errors.username?.message)}
                helperText={errors.username?.message}
                {...register('username', {
                  required: {
                    value: true,
                    message: 'Поле обязательно для заполнения',
                  },
                  validate: (val) =>
                    /[А-Я,а-я]+/.test(val)
                      ? 'Логин должен содержать латиницу'
                      : undefined,
                })}
              />
              <TextField
                label='Пароль'
                type='password'
                size='small'
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Поле обязательно для заполнения',
                  },
                })}
              />
            </Stack>

            <Box sx={{ mt: 4 }}>
              <Button size='small' variant='contained' type='submit'>
                Войти
              </Button>
            </Box>
            {error_text && (
              <Box sx={{ mt: 2 }}>
                <AlertError>{error_text}</AlertError>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
