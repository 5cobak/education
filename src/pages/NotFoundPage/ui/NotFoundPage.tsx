import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import classNames from 'classnames';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return <div className={classNames(cls.NotFoundPage, {}, [className])}>{t('page404')}</div>;
};
