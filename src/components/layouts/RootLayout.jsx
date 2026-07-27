import { Outlet } from 'react-router';

import ScrollToTop from '../common/ScrollToTop';

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
