import React, { ReactNode } from 'react';
import s from './index.scss';

export interface TextProps {
  title?: string;
  children: ReactNode;
  textVariant?: 'default' | 'error';
}

export const Text: React.FC<TextProps> = (props) => {
  const { title, children, textVariant = 'error' } = props;

  return (
    <div className={s[textVariant]}>
      {title && <span className={s.title}>{title}</span>}
      <p>{children}</p>
    </div>
  );
};
