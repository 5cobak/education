import React, { ReactNode, useCallback } from 'react';
import { Button, ButtonProps } from '../Button';
import { useNavigate } from 'react-router-dom';

import s from '../Button/index.scss';
interface Props extends ButtonProps {
    to?: string;
    needBack?: boolean;
    children: ReactNode;
}

export const ButtonLink: React.FC<Props> = (props) => {
    const { to, needBack, children, ...otherProps } = props;
    const navigate = useNavigate();

    const navigateHandler = useCallback(() => {
        if (needBack) {
            navigate(-1);
        } else if (to) {
            navigate(to);
        }
    }, [to, navigate, needBack]);

    return (
        <Button onClick={navigateHandler} className={s.button} {...otherProps}>
            {children}
        </Button>
    );
};
