import { ReactElement } from 'react';

export enum AppRoutes {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT',
    PROFILE_PAGE = 'PROFILE_PAGE',
    NOT_FOUND = 'NOT_FOUND',
}
export enum RoutePaths {
    MAIN = '/profile',
    ABOUT = '/about',
    PROFILE_PAGE = '/',
    NOT_FOUND = '*',
}

interface RouteProps {
    path: RoutePaths;
    element: ReactElement;
    isPrivate?: boolean;
}

export type RouterConfig = Record<AppRoutes, RouteProps>;
