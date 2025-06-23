import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import s from './index.scss';

import classNames from 'classnames';

const CLOSING_TIMEOUT = 200;

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ children, isOpen, onClose }) => {
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const closeModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, CLOSING_TIMEOUT);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    setIsMounted(isOpen);
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(timeRef.current);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className={classNames(s.overlay, mods)} onClick={closeModal}>
      <div className={s.content} onClick={onContentClick}>
        {children}
      </div>
    </div>
  );
};
