import { RouterProvider } from 'react-router/dom';

import router from './router/router';
const App = () => {
  return (
    <>
      <div className="rounded-xl bg-blue-500 p-4 text-center font-bold text-white">
        تیلویند با موفقیت فعال شد! 🎉
      </div>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
