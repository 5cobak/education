import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../lib/routerConfig';
export const RouterProvider = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
