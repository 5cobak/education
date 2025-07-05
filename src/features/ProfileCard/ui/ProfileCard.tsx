import React, { memo } from 'react';
import s from './index.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/Button';
import { TextField } from 'src/shared/ui/TextField';
import { ProfileData } from 'src/entities/Profile';
import { Message } from 'src/shared/utils/translationUtils';
import { Text } from 'src/shared/ui/Text';
import { Loader } from 'src/shared/ui/Loader';

interface Props {
  data: ProfileData;
  isLoading?: boolean;
  isEditable?: boolean;
  error?: Message;
}

export const ProfileCard = memo((props: Props) => {
  const { t } = useTranslation();
  const { data, error, isLoading, isEditable } = props;

  return (
    <div className={s.card}>
      <div>
        <Text title={t('ProfilePage_Header')} />
        {isEditable ? (
          <Button size="xl">{t('EditProfile_button')}</Button>
        ) : (
          <Button size="xl">{t('EditProfile_button')}</Button>
        )}
      </div>
      {isLoading && <Loader />}
      {error && <Text>{t(error.key)}</Text>}
      {data && (
        <>
          <TextField className={s.input} value={data?.firstName || ''} />
          <TextField className={s.input} value={data?.lastName || ''} />
          <TextField className={s.input} value={data?.age || ''} />
          <TextField className={s.input} value={data?.currency || ''} />
          <TextField className={s.input} value={data?.city || ''} />
          <TextField className={s.input} value={data?.username || ''} />
          <TextField className={s.input} value={data?.avatar || ''} />
        </>
      )}
    </div>
  );
});

ProfileCard.displayName = 'ProfileCard';
