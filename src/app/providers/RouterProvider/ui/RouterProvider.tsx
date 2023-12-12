import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routerConfig } from '../lib/routerConfig';
import s from './index.scss';
export const RouterProvider = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        {Object.values(routerConfig).map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
};
