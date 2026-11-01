import { createBrowserRouter } from 'react-router';

import RootLayout from '../components/layouts/RootLayout';
import About from '../pages/about';
import Archive from '../pages/archive';
import ArchiveArticles from '../pages/archive-articles';
import ArchiveOnline from '../pages/archiveOnline';
import Collab from '../pages/collab';
import Contact from '../pages/contact';
import DetailCourse from '../pages/detail';
import ArticlePage from '../pages/detail-article';
import ForgotPasswordPage from '../pages/forgot-password';
import HomePage from '../pages/homepage';
import LoginPage from '../pages/login';
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
import PanelAdminLayout from '../pages/panel-admin';
import PanelAdminArticles from '../pages/panel-admin/articles';
import PanelAdminArticleEdit from '../pages/panel-admin/articles/edit';
import PanelAdminArticleCreate from '../pages/panel-admin/articles/new';
import PanelAdminCourses from '../pages/panel-admin/courses';
import PanelAdminCourseEdit from '../pages/panel-admin/courses/edit';
import PanelAdminCourseCreate from '../pages/panel-admin/courses/new';
import PanelAdminDashboard from '../pages/panel-admin/dashboard';
import PanelAdminFinance from '../pages/panel-admin/finance';
import PanelAdminDiscountCreate from '../pages/panel-admin/finance/discount';
import PanelAdminSupport from '../pages/panel-admin/support';
import PanelAdminTicketDetail from '../pages/panel-admin/support/chat';
import PanelAdminUsers from '../pages/panel-admin/users';
import PanelAdminUserEdit from '../pages/panel-admin/users/edit';
import RegisterPage from '../pages/signup';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        children: [
          { index: true, element: <HomePage /> },

          { path: 'course/:slug', element: <DetailCourse /> },
          { path: 'article/:slug', element: <ArticlePage /> },

          {
            path: 'login',
            element: <LoginPage />,
          },

          {
            path: 'register',
            element: <RegisterPage />,
          },

          {
            path: 'forgot-password',
            element: <ForgotPasswordPage />,
          },

          {
            path: 'about',
            element: <About />,
          },

          {
            path: 'contact',
            element: <Contact />,
          },

          {
            path: 'collab',
            element: <Collab />,
          },

          {
            path: 'archive',
            element: <Archive />,
          },

          {
            path: 'articles',
            element: <ArchiveArticles />,
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
            path: 'panel-admin',
            element: <PanelAdminLayout />,
            children: [
              {
                index: true,
                element: <PanelAdminDashboard />,
              },
              {
                path: 'users',
                element: <PanelAdminUsers />,
              },

              {
                path: 'editUser',
                element: <PanelAdminUserEdit />,
              },
              {
                path: 'support',
                element: <PanelAdminSupport />,
              },

              {
                path: 'finance',
                element: <PanelAdminFinance />,
              },

              {
                path: 'courses',
                element: <PanelAdminCourses />,
              },

              {
                path: 'newCourse',
                element: <PanelAdminCourseCreate />,
              },

              {
                path: 'editCourse',
                element: <PanelAdminCourseEdit />,
              },

              {
                path: 'articles',
                element: <PanelAdminArticles />,
              },

              {
                path: 'newArticles',
                element: <PanelAdminArticleCreate />,
              },

              {
                path: 'newDiscount',
                element: <PanelAdminDiscountCreate />,
              },

              {
                path: 'editArticle',
                element: <PanelAdminArticleEdit />,
              },

              {
                path: 'ticket',
                element: <PanelAdminTicketDetail />,
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
