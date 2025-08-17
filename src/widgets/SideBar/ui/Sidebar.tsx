import { Button } from 'src/shared/ui/Button';
import s from './index.scss';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher';
import { useTranslation } from 'react-i18next';

import { ButtonIds, SideBarIds } from 'config/jest/utils/testIds';

import { MainPageIcon } from './icons/MainPageIcon';
import { AboutPageIcon } from './icons/AboutPageIcon';
import { ProfilePageIcon } from './icons/ProfilePageIcon';
import { LinkListType } from './types';
import { LinkListItem } from 'src/shared/ui/LinkListItem';
import { useSelector } from 'react-redux';

import ArticlesPageIcon from 'src/shared/assets/icons/article.svg';
import { selectUserId } from 'src/entities/User/model/selectors/selectUserId/selectUserId';
import { routePaths } from 'src/app/providers/RouterProvider/types';

const linkListData: LinkListType = [
    { icon: <MainPageIcon />, path: routePaths.MAIN, message: { key: 'go_mainPage' } },
    { icon: <AboutPageIcon />, path: routePaths.ABOUT, message: { key: 'go_aboutPage' } },
    { icon: <ProfilePageIcon />, path: routePaths.PROFILE_PAGE, message: { key: 'go_profilePage' }, isPrivate: true },
    { icon: <ArticlesPageIcon />, path: routePaths.ARTICLES, message: { key: 'go_articlesPage' }, isPrivate: true },
];

export const Sidebar: React.FC = () => {
    const [collapsed, setCollapse] = useState(true);
    const userId = useSelector(selectUserId);
    const { t, i18n } = useTranslation();

    const toggleLocales = () => {
        const locale = i18n.language;
        i18n.changeLanguage(locale === 'ru' ? 'en' : 'ru');
    };

    const linkList = useMemo(() => {
        return (
            <ul className={s.linkList}>
                {linkListData.map((data) => {
                    if (!userId && data.isPrivate) {
                        return null;
                    }
                    let path = data.path;

                    if (path === routePaths.PROFILE_PAGE) {
                        path += userId;
                    }

                    return (
                        <li key={data.path}>
                            <LinkListItem path={path} icon={data.icon} collapsed={collapsed}>
                                {t(data.message.key)}
                            </LinkListItem>
                        </li>
                    );
                })}
            </ul>
        );
    }, [collapsed, t, userId]);

    return (
        <div className={classNames(s.sidebar, collapsed && s.collapsed)} data-testid={SideBarIds.mainSidebar}>
            <Button
                theme="outline"
                buttonVariant={collapsed ? 'circle' : 'default'}
                onClick={toggleLocales}
                className={s.langSwitcher}
            >
                {collapsed ? i18n.language : t('language')}
            </Button>
            {linkList}
            <div className={s.themeSwitcherWrapper}>
                <ThemeSwitcher />
            </div>
            <Button
                buttonVariant="square"
                theme="outline"
                size="l"
                className={s.showHideButton}
                data-testid={ButtonIds.MainSideBarToggler}
                onClick={() => setCollapse(!collapsed)}
            >
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    );
};
