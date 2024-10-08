import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { UserMenu } from '../UserMenu/';

export const Header = () => {
  const { isAuth } = useAppSelector((state) => state.authSlice);

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 6 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography
              variant='h4'
              component='div'
              sx={{ flexGrow: 1, fontWeight: 700 }}
            >
              Данные
            </Typography>
            {isAuth && <UserMenu />}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
