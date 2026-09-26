import { createBrowserRouter } from 'react-router';

import RootLayout from '../components/layouts/RootLayout';
import About from '../pages/about';
import Archive from '../pages/archive';
import ArchiveOnline from '../pages/archiveOnline';
import DetailCourse from '../pages/detail';
import HomePage from '../pages/homepage';
import NotFound from '../pages/not-found/NotFound';
import PanelLayout from '../pages/panel';
import PanelDashboard from '../pages/panel/dashboard';
import PanelCertificates from '../pages/panel/myCertificates';
import PanelCourses from '../pages/panel/myCourses';
import PanelProfile from '../pages/panel/profile';
import PanelProfileInfo from '../pages/panel/profile/PanelProfileInfo';
import PanelProfileNotification from '../pages/panel/profile/PanelProfileNotification';
import PanelProfileSecurity from '../pages/panel/profile/PanelProfileSecurity';
import PanelSupport from '../pages/panel/support';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        children: [
          { index: true, element: <HomePage /> },

          { path: 'course/:slug', element: <DetailCourse /> },

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

              {
                path: 'certificates',
                element: <PanelCertificates />,
              },

              {
                path: 'support',
                element: <PanelSupport />,
              },

              {
                path: 'profile',
                element: <PanelProfile />,
                children: [
                  {
                    index: true,
                    element: <PanelProfileInfo />,
                  },

                  {
                    path: 'security',
                    element: <PanelProfileSecurity />,
                  },

                  {
                    path: 'notification',
                    element: <PanelProfileNotification />,
                  },
                ],
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
