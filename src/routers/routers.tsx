import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Login } from '../pages/Login';
import { Data } from '../pages/Data';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Data />,
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
  ],
  {
    basename: '/data-app/',
  },
);
