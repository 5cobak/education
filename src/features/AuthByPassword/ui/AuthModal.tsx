import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectUserPassword } from '../modal/selectors/selectUserPassword/selectUserPassword';
import { Modal } from 'src/shared/ui/Modal';

import { selectUsername } from '../modal/selectors/selectUsername/selectUsername';
import { loginActions } from '../modal/slice/loginSlice';

import { AuthForm } from './AuthForm/AuthForm';
import { selectAuthError } from '../modal/selectors/selectAuthError/selectAuthError';
import { selectAuthPending } from '../modal/selectors/selectAuthPending/selectAuthPending';

export interface AuthModelProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const AuthModal: React.FC<AuthModelProps> = ({ isOpen, onClose }) => {
  const username = useSelector(selectUsername);
  const password = useSelector(selectUserPassword);
  const error = useSelector(selectAuthError);
  const isPending = useSelector(selectAuthPending);
  const dispatch = useDispatch();

  const changeUsernameHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const changeUserPasswordHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AuthForm
        username={username}
        password={password}
        changeUserPasswordHandler={changeUserPasswordHandler}
        changeUsernameHandler={changeUsernameHandler}
        isPending={isPending}
        error={error}
      />
    </Modal>
  );
};
