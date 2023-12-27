import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();
  return <div>{t('go_about_us_page')}</div>;
};

export default AboutPage;
