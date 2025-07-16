import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();
    return <div>{t('go_aboutPage')}</div>;
};

export default AboutPage;
