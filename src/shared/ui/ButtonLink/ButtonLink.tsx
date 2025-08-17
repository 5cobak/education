import React, { useCallback } from 'react';
import { Button, ButtonProps } from '../Button';
import { useNavigate } from 'react-router-dom';
import s from '../Button/index.scss';
interface Props extends ButtonProps {
    to: string;
}

export const ButtonLink: React.FC<Props> = (props) => {
    const { to, ...otherProps } = props;
    const navigate = useNavigate();

    const navigateHandler = useCallback(() => {
        navigate(to);
    }, [to, navigate]);

    return <Button onClick={navigateHandler} className={s.button} {...otherProps}></Button>;
};
