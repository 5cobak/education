import React, { memo } from 'react';
import s from './index.scss';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { loginUser } from 'src/entities/User';
import { TextField } from 'src/shared/ui/TextField';
import { Button, ButtonTheme } from 'src/shared/ui/Button';
import { Text } from 'src/shared/ui/Text';
import { Message } from 'src/shared/utils/translationWrapper';

interface Props {
  username: string;
  password: string;
  changeUsernameHandler: (value: string) => void;
  changeUserPasswordHandler: (value: string) => void;
  isPending: boolean;

  error?: Message | undefined;
}

export const AuthForm = memo((props: Props) => {
  const { username, password, changeUserPasswordHandler, changeUsernameHandler, isPending, error } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <form className={s.authForm}>
      <h1>{t('authModal_singIn')}</h1>
      {error && <Text>{t(error.key, error.params)}</Text>}
      <TextField
        autoFocus
        value={username}
        wrapperClassName={s.inputWrapper}
        name="user"
        changeHandler={changeUsernameHandler}
      />
      <TextField
        value={password}
        wrapperClassName={s.inputWrapper}
        type="password"
        name="password"
        changeHandler={changeUserPasswordHandler}
      />
      <Button
        theme={ButtonTheme.OutlineDark}
        disabled={!(username && password) || isPending}
        pending={isPending}
        onClick={() => {
          dispatch(loginUser({ username, password }));
        }}
      >
        {t('Button_Auth')}
      </Button>
    </form>
  );
});

AuthForm.displayName = 'AuthForm';
