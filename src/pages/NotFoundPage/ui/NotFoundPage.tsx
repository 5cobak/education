import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import classNames from 'classnames';
import { Page } from 'src/shared/ui/Page';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return <Page className={classNames(cls.NotFoundPage, {}, [className])}>{t('page404')}</Page>;
};
