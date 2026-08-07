import { createBrowserRouter } from 'react-router';

import RootLayout from '../components/layouts/RootLayout';
import About from '../pages/about';
import Archive from '../pages/archive';
import ArchiveOnline from '../pages/archiveOnline';
import Detail from '../pages/course-detail';
import HomePage from '../pages/homepage';
import NotFound from '../pages/not-found/NotFound';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        children: [
          { index: true, element: <HomePage /> },
          { path: 'detail', element: <Detail /> },
          {
            path: 'about',
            element: <About />,
          },

          {
            path: 'archive',
            element: <Archive />,
          },

          {
            path: 'archive-online',
            element: <ArchiveOnline />,
          },

          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

export default router;
