import { createBrowserRouter } from 'react-router';

import Detail from '../pages/course-detail';
import HomePage from '../pages/homepage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'detail', element: <Detail /> },
    ],
  },
]);

export default router;
