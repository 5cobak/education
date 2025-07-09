import React from 'react';
import s from './index.scss';
import classNames from 'classnames';

export interface Props {
    src: string;
    size?: 'm' | 'l' | 'xl';
}

export const Avatar: React.FC<Props> = ({ src, size = 'l' }) => {
    const mods = {
        [s[size]]: true,
    };

    return <img className={classNames(s.container, mods)} src={src} />;
};
