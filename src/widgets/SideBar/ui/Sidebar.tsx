import Button from 'src/shared/ui/Button';
import s from './index.scss';
import { useState } from 'react';
import classNames from 'classnames';
import ThemeSwitcher from 'src/features/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapse] = useState(true);

  const { t } = useTranslation('common');

  const toggleLocales = () => {
    const locale = i18next.language;
    i18next.changeLanguage(locale === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(s.sidebar, collapsed && s.collapsed)}>
      <div className={s.switchers}>
        <Button onClick={toggleLocales}>{t('language')}</Button>
        <ThemeSwitcher />
        <Button onClick={() => setCollapse(!collapsed)}>{collapsed ? t('sidebar_show') : t('sidebar_close')}</Button>
      </div>
    </div>
  );
};
