import React, { ReactNode } from 'react';

import { createPortal } from 'react-dom';

interface Props {
  component: ReactNode;
  target?: HTMLElement;
  key?: string;
}

export const Portal: React.FC<Props> = ({ component, target = document.body, key }) => {
  return createPortal(component, target, key);
};
