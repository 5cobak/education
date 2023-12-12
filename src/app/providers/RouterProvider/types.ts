import { ReactElement } from 'react';

export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
}

interface RouteProps {
  path: AppRoutes;
  element: ReactElement;
}

export type RouterConfig = Record<AppRoutes, RouteProps>;
