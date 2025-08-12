import React, { ReactNode } from 'react';
import s from './index.scss';
import classNames from 'classnames';

export interface TextProps {
    title?: string;
    children?: ReactNode;
    textVariant?: 'default' | 'error';
    size?: 'm' | 'l' | 'xl';
    pMarginBottom?: string | number;
}

export const Text: React.FC<TextProps> = (props) => {
    const { title, children, textVariant = 'default', size = 'm', pMarginBottom } = props;

    return (
        <div className={classNames(s.wrapper, s[textVariant], s[size])}>
            {title && <span className={s.title}>{title}</span>}
            {children && <p style={{ marginBottom: pMarginBottom }}>{children}</p>}
        </div>
    );
};
