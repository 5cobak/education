import React from 'react';
import s from './index.scss';

import classNames from 'classnames';
import { Skeleton } from 'src/shared/ui/Skeleton';
import { ViewType } from 'src/features/ViewToggler';

interface Props {
    view: ViewType;
}

export const SkeletonItem: React.FC<Props> = (props) => {
    const { view } = props;

    let content = null;

    if (view === 'small') {
        content = (
            <div className={classNames(s.card, s.small)}>
                <Skeleton className={s.skeleton} height="200px" />
                <Skeleton className={classNames(s.date, s.skeleton)} width="150px" />
                <div className={classNames(s.header, s.skeleton)}>
                    <Skeleton className={s.skeleton} width="200px" />
                    <Skeleton width="100px" />
                </div>
            </div>
        );
    } else {
        content = (
            <div className={classNames(s.card, s.big)}>
                <div className={s.header}>
                    <div className={classNames(s.author, s.skeleton)}>
                        <Skeleton width="40px" height="40px" border="50%" />
                        <Skeleton className={s.marginLeft15} width="150px" height="15px" />
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                        <Skeleton className={s.date} width="150px" height="15px" />
                    </div>
                </div>
                <div className={s.skeleton}>
                    <Skeleton width="300px" height="40px" />
                </div>

                <Skeleton className={s.skeleton} width="200px" height="20px" />
                <div className={s.skeleton}>
                    <Skeleton height="350px" />
                </div>
                <div className={s.skeleton}>
                    <Skeleton height="150px" />
                </div>
                <div className={s.views}>
                    <div />
                    <Skeleton width="100px" height="15px" />
                </div>
            </div>
        );
    }

    return content;
};
