import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Auth } from './components/Auth';
import { ThemeProvider } from './providers/ThemeProvider';
import { router } from './routers/routers.tsx';
import { store } from './store/store.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Auth>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Auth>
  </Provider>
);
