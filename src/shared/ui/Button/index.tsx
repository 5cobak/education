import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import s from './index.scss';

export enum ButtonTheme {
  Clear = 'clear',
  Outline = 'outline',
  OutlineDark = 'outlineDark',
}

export enum ButtonVariant {
  Default = 'default',
  Square = 'square',
  Circle = 'circle',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  buttonVariant?: ButtonVariant;
  size?: 'm' | 'l' | 'xl';
}

export const Button: React.FC<Props> = (props: Props) => {
  const { theme, children, size = 'm', buttonVariant = 'default', className, ...otherProps } = props;
  return (
    <button className={cn(s.button, s[theme], s[buttonVariant], s[`size-${size}`], className)} {...otherProps}>
      {children}
    </button>
  );
};
