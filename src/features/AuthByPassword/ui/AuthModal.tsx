import React from 'react';
import s from './index.scss';
import { TextField } from 'src/shared/ui/TextField';
import { Modal } from 'src/shared/ui/Modal';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/Button';

export interface AuthModelProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const AuthModal: React.FC<AuthModelProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const changeHandler = () => {};

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={s.authForm}>
        <h1>{t('authModal_singIn')}</h1>
        <TextField wrapperClassName={s.inputWrapper} name="user" changeHandler={changeHandler} />
        <TextField wrapperClassName={s.inputWrapper} type="password" name="password" changeHandler={changeHandler} />
        <Button>{t('Button_Auth')}</Button>
      </div>
    </Modal>
  );
};
