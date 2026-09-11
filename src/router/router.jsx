import { createBrowserRouter } from 'react-router';

import RootLayout from '../components/layouts/RootLayout';
import About from '../pages/about';
import Archive from '../pages/archive';
import ArchiveOnline from '../pages/archiveOnline';
import Detail from '../pages/course-detail';
import HomePage from '../pages/homepage';
import NotFound from '../pages/not-found/NotFound';
import PanelLayout from '../pages/panel';
import PanelDashboard from '../pages/panel/dashboard';
import PanelCourses from '../pages/panel/myCourses';

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
            path: 'panel',
            element: <PanelLayout />,
            children: [
              {
                index: true,
                element: <PanelDashboard />,
              },

              {
                path: 'courses',
                element: <PanelCourses />,
              },
            ],
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
