import { RouteProps } from 'react-router-dom';

export interface AppRouteProps extends RouteProps {
    isPrivate?: boolean;
}
export enum AppRoutes {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT',
    PROFILE_PAGE = 'PROFILE_PAGE',
    ARTICLES = 'ARTICLES',
    ARTICLE_DETAILS = 'ARTICLE_DETAILS',
    NOT_FOUND = 'NOT_FOUND',
}
export const RoutePaths: Record<AppRoutes, string> = {
    MAIN: '/',
    ABOUT: '/about',
    PROFILE_PAGE: '/profile',
    ARTICLES: '/articles',
    ARTICLE_DETAILS: '/articles/',
    NOT_FOUND: '*',
};

export type RouterConfig = Record<AppRoutes, AppRouteProps>;
