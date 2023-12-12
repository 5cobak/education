import { MainPage } from 'src/pages/MainPage';
import { AppRoutes, RouterConfig } from '../types';
import { AboutPage } from 'src/pages/AboutPage';

export const routerConfig: RouterConfig = {
  [AppRoutes.MAIN]: { path: AppRoutes.MAIN, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: AppRoutes.ABOUT, element: <AboutPage /> },
};
