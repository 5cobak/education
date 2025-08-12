import React from 'react';
import s from './index.scss';
import { ArticleBLockCodeType } from 'src/entities/Article';

interface Props {
    block: ArticleBLockCodeType;
}

export const ArticleCodeBlock: React.FC<Props> = (props) => {
    const { block } = props;

    return (
        <div className={s.codeBlockWrapper}>
            <pre>
                <code>{block.code}</code>
            </pre>
        </div>
    );
};
