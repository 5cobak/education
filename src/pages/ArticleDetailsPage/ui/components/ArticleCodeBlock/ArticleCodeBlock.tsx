import React, { useCallback, useEffect, useRef, useState } from 'react';
import s from './index.scss';
import { ArticleBLockCodeType } from 'src/entities/Article';
import { Button } from 'src/shared/ui/Button';
import CopyIcon from 'src/shared/assets/icons/copy.svg';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

interface Props {
    block: ArticleBLockCodeType;
}

export const ArticleCodeBlock: React.FC<Props> = (props) => {
    const { block } = props;

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const { t } = useTranslation();

    useEffect(() => {
        if (isCopied) {
            timerRef.current = setTimeout(() => {
                setIsCopied(false);
                clearTimeout(timerRef.current);
            }, 300);
        }
    }, [isCopied, setIsCopied]);

    const copyCode = useCallback(() => {
        navigator.clipboard.writeText(block.code);
        setIsCopied(true);
    }, [block, setIsCopied]);

    return (
        <div className={s.codeBlockWrapper} title={t('copied')}>
            <pre>
                <code>{block.code}</code>
            </pre>
            <Button className={classNames(s.copyButton, isCopied && s.copied)} theme="clear" onClick={copyCode}>
                <CopyIcon />
            </Button>
        </div>
    );
};
