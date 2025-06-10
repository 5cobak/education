import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import s from './index.scss';

export enum ButtonTheme {
  Clear = 'clear',
  Outline = 'outline',
  OutlineDark = 'outlineDark',
}
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button: React.FC<Props> = (props: Props) => {
  const { theme, children, ...otherProps } = props;
  return (
    <button className={cn(s.button, s[theme])} {...otherProps}>
      {children}
    </button>
  );
};
