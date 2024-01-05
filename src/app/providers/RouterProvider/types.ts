import { ReactElement } from 'react';

export enum AppRoutes {
  MAIN = 'MAIN',
  ABOUT = 'ABOUT',
  NOT_FOUND = 'NOT_FOUND',
}
export enum RoutePaths {
  MAIN = '/',
  ABOUT = '/about',
  NOT_FOUND = '*',
}

interface RouteProps {
  path: RoutePaths;
  element: ReactElement;
}

export type RouterConfig = Record<AppRoutes, RouteProps>;
