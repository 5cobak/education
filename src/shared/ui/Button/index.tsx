import { ButtonHTMLAttributes, memo } from 'react';
import cn from 'classnames';
import s from './index.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'default' | 'clear' | 'outline' | 'outlineDark' | 'success' | 'cancel';
    buttonVariant?: 'default' | 'square' | 'circle';
    pending?: boolean;
    size?: 'm' | 'l' | 'xl';
}

export const Button = memo((props: ButtonProps) => {
    const {
        theme = 'default',
        children,
        size = 'm',
        buttonVariant = 'default',
        className,
        disabled,
        pending,
        type = 'button',
        ...otherProps
    } = props;
    const mods = {
        [s.disabled]: disabled,
        [s.pending]: pending,
    };
    return (
        <button
            type={type}
            className={cn(s.button, s[theme], s[buttonVariant], s[`size-${size}`], mods, className)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
