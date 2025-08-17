import React from 'react';
import s from './index.scss';
import EyeIcon from 'src/shared/assets/icons/eye.svg';

interface Props {
    count: number;
    countIsFirst?: boolean;
}

export const Views: React.FC<Props> = (props) => {
    const { count, countIsFirst } = props;

    return (
        <div className={s.views}>
            {countIsFirst && <span className={s.count}>{count}</span>}
            <EyeIcon className={countIsFirst ? s.marginLeft : s.marginRight} />
            {!countIsFirst && <span className={s.count}>{count}</span>}
        </div>
    );
};
