import Button from 'src/shared/ui/Button';
import s from './index.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { ButtonIds, SideBarIds } from 'config/jest/utils/testIds';

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapse] = useState(true);

  const { t } = useTranslation();

  const toggleLocales = () => {
    const locale = i18next.language;
    i18next.changeLanguage(locale === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(s.sidebar, collapsed && s.collapsed)} data-test-id={SideBarIds.mainSidebar}>
      <div className={s.switchers}>
        <Button data-test-id={ButtonIds.mainSideBarToggler} onClick={toggleLocales}>
          {t('language')}
        </Button>
        <ThemeSwitcher />
        <Button onClick={() => setCollapse(!collapsed)}>{collapsed ? t('sidebar_show') : t('sidebar_close')}</Button>
      </div>
    </div>
  );
};
