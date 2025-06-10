import { MainPage } from 'src/pages/MainPage';
import { AppRoutes, RoutePaths, RouterConfig } from '../types';
import { AboutPage } from 'src/pages/AboutPage';
import { NotFoundPage } from 'src/pages/NotFoundPage';

export const routerConfig: RouterConfig = {
  [AppRoutes.MAIN]: { path: RoutePaths.MAIN, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutePaths.ABOUT, element: <AboutPage /> },
  [AppRoutes.NOT_FOUND]: { path: RoutePaths.NOT_FOUND, element: <NotFoundPage /> },
};
