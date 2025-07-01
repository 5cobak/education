import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation();
  return <div>{t('ProfilePage_Header')}</div>;
};

export default ProfilePage;
