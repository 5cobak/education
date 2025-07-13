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

const linkListData: LinkListType = [
    { icon: <MainPageIcon />, path: './', message: { key: 'go_mainPage' } },
    { icon: <AboutPageIcon />, path: './about', message: { key: 'go_aboutPage' } },
    { icon: <ProfilePageIcon />, path: './profile', message: { key: 'go_profilePage' } },
];

export const Sidebar: React.FC = () => {
    const [collapsed, setCollapse] = useState(true);

    const { t, i18n } = useTranslation();

    const toggleLocales = () => {
        const locale = i18n.language;
        i18n.changeLanguage(locale === 'ru' ? 'en' : 'ru');
    };

    const linkList = useMemo(() => {
        return (
            <ul className={s.linkList}>
                {linkListData.map((data) => {
                    return (
                        <li key={data.path}>
                            <LinkListItem path={data.path} icon={data.icon} collapsed={collapsed}>
                                {t(data.message.key)}
                            </LinkListItem>
                        </li>
                    );
                })}
            </ul>
        );
    }, [collapsed, t]);

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
