import React from 'react';
import s from './index.scss';
import { ArticleBLockImageType } from 'src/entities/Article';

interface Props {
    block: ArticleBLockImageType;
}

export const ArticleImgBlock: React.FC<Props> = (props) => {
    const { block } = props;

    return (
        <div className={s.blockWrapper}>
            <img src={block.src} />
        </div>
    );
};
