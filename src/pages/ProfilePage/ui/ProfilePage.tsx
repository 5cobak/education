import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { profileReducer, selectProfileData, selectProfileIsLoading } from 'src/entities/Profile';
import { useLayReducer } from 'src/shared/hooks/createLazyReducer';
import { Text } from 'src/shared/ui/Text';
import s from './index.scss';
import { TextField } from 'src/shared/ui/TextField';
import { Button } from 'src/shared/ui/Button';
import { useEffect } from 'react';
import { fetchProfileData } from 'src/entities/Profile';
import { Loader } from 'src/shared/ui/Loader';
import { selectProfileError } from 'src/entities/Profile';

const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector(selectProfileData);
  const error = useSelector(selectProfileError);
  const isLoading = useSelector(selectProfileIsLoading);

  useLayReducer('profile', profileReducer);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={s.profile}>
      <Text title={t('ProfilePage_Header')} />
      {error && <Text>{t(error.key)}</Text>}
      <TextField className={s.input} value={data?.firstName || ''} />
      <TextField className={s.input} value={data?.lastName || ''} />
      <Button size="xl">{t('EditProfile_button')}</Button>
    </div>
  );
};

export default ProfilePage;
