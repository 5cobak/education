import { MainPage } from 'src/pages/MainPage';
import { AppRoutes, routePaths, RouterConfig } from '../types';
import { AboutPage } from 'src/pages/AboutPage';
import { NotFoundPage } from 'src/pages/NotFoundPage';
import { ProfilePage } from 'src/pages/ProfilePage';
import { ArticleDetailsPage } from 'src/pages/ArticleDetailsPage';
import { ArticlesPage } from 'src/pages/ArticlesPage';

export const routerConfig: RouterConfig = {
    [AppRoutes.MAIN]: { path: routePaths.MAIN, element: <MainPage /> },
    [AppRoutes.ABOUT]: { path: routePaths.ABOUT, element: <AboutPage /> },
    [AppRoutes.PROFILE_PAGE]: { path: `${routePaths.PROFILE_PAGE}:id`, element: <ProfilePage />, isPrivate: true },
    [AppRoutes.ARTICLES]: { path: routePaths.ARTICLES, element: <ArticlesPage />, isPrivate: true },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${routePaths.ARTICLE_DETAILS}:id`,
        element: <ArticleDetailsPage />,
        isPrivate: true,
    },

    [AppRoutes.NOT_FOUND]: { path: routePaths.NOT_FOUND, element: <NotFoundPage /> },
};
