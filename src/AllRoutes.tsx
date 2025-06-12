import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';


export const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);


