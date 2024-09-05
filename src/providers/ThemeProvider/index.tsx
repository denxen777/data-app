import { FC } from 'react';
import {
  createTheme,
  ThemeProvider as ThemeProviderMui,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProviderProps } from './types.ts';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div>
      <ThemeProviderMui theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProviderMui>
    </div>
  );
};
