import React, { Suspense } from 'react';

import { Modal } from 'src/shared/ui/Modal';

import { Loader } from 'src/shared/ui/Loader';
import { AuthModalLazy } from './AuthForm/AuthFormLazy';

export interface AuthModelProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const AuthModal: React.FC<AuthModelProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <AuthModalLazy />
      </Suspense>
    </Modal>
  );
};
