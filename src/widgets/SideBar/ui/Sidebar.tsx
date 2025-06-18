import { Button, ButtonTheme, ButtonVariant } from 'src/shared/ui/Button';
import s from './index.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { ButtonIds, SideBarIds } from 'config/jest/utils/testIds';
import AppLink from 'src/shared/ui/AppLink';
import { MainPageIcon } from './icons/MainPageIcon';
import { AboutPageIcon } from './icons/AboutPageIcon';
export const Sidebar: React.FC = () => {
  const [collapsed, setCollapse] = useState(true);

  const { t } = useTranslation();

  const toggleLocales = () => {
    const locale = i18next.language;
    i18next.changeLanguage(locale === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(s.sidebar, collapsed && s.collapsed)} data-testid={SideBarIds.mainSidebar}>
      <Button
        theme={ButtonTheme.Outline}
        buttonVariant={collapsed && ButtonVariant.Circle}
        onClick={toggleLocales}
        className={s.langSwitcher}
      >
        {collapsed ? i18next.language : t('language')}
      </Button>

      <div className={s.themeSwitcherWrapper}>
        <ThemeSwitcher />
      </div>
      <Button
        buttonVariant={ButtonVariant.Square}
        theme={ButtonTheme.Outline}
        size="l"
        className={s.showHideButton}
        data-testid={ButtonIds.MainSideBarToggler}
        onClick={() => setCollapse(!collapsed)}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <ul className={s.linkList}>
        <li>
          <AppLink className={s.link} to={'/'}>
            {collapsed ? <MainPageIcon /> : t('go_main_page')}
          </AppLink>
        </li>
        <li>
          <AppLink className={s.link} to={'/about'}>
            {collapsed ? <AboutPageIcon /> : t('go_about_us_page')}
          </AppLink>
        </li>
      </ul>
    </div>
  );
};
