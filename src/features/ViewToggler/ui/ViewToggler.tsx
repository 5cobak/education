import React, { useEffect, useState } from 'react';
import s from './index.scss';
import { ViewType } from './types';
import { Button } from 'src/shared/ui/Button';
import BlockViewIcon from 'src/shared/assets/icons/block-view.svg';
import ListViewIcon from 'src/shared/assets/icons/list-view.svg';
import classNames from 'classnames';

interface Props {
    onChange: (view: ViewType) => void;
}

export const ViewToggler: React.FC<Props> = (props) => {
    const { onChange } = props;
    const [view, setView] = useState<ViewType>('small');

    useEffect(() => {
        onChange(view);
    }, [view, onChange]);

    const styles = {
        small: view === 'small' ? s.activeTab : undefined,
        big: view === 'big' ? s.activeTab : undefined,
    };

    return (
        <div className={s.wrapper}>
            <Button theme="clear" className={classNames(s.small, styles.small)} onClick={() => setView('small')}>
                <BlockViewIcon />
            </Button>

            <Button theme="clear" className={classNames(s.big, styles.big)} onClick={() => setView('big')}>
                <ListViewIcon />
            </Button>
        </div>
    );
};
