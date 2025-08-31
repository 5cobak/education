import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import classNames from 'classnames';
import { Page } from 'src/shared/ui/Page';

interface NotFoundPageProps {
    className?: string;
}

const NOT_FOUND_PAGE_SCROLL_POSITION = 'NOT_FOUND_PAGE_SCROLL_POSITION';

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page storageKey={NOT_FOUND_PAGE_SCROLL_POSITION} className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('page404')}
        </Page>
    );
};
