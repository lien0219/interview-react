import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);