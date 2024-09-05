import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};
