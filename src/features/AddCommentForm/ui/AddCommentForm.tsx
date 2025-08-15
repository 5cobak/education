import React, { memo, useCallback, useState } from 'react';
import s from './index.scss';
import { Button } from 'src/shared/ui/Button';
import { TextField } from 'src/shared/ui/TextField';
import { useTranslation } from 'react-i18next';
import { ApiError } from 'src/shared/api';

interface Props {
    onAddComment: (text: string) => void;
    isLoading?: boolean;
    error?: ApiError | string;
}

export const AddCommentForm = memo((props: Props) => {
    const { onAddComment, isLoading, error } = props;
    const { t } = useTranslation();
    const [text, setText] = useState<string>('');

    const onSubmitHandler = useCallback(
        (e) => {
            e.preventDefault();
            onAddComment(text);
            setText('');
        },
        [text, onAddComment]
    );

    const renderError = () => {
        if (error) {
            switch (error) {
                case ApiError.SERVER_ERROR:
                    return t('api_error_serverError');
                default:
                    return t(error);
            }
        }
    };

    return (
        <>
            <form className={s.form} onSubmit={onSubmitHandler}>
                <TextField
                    placeholder={t('Comment_inputPlaceHolder')}
                    wrapperClassName={s.inputWrapper}
                    name="commentField"
                    value={text}
                    changeHandler={setText}
                    disabled={isLoading}
                />

                <Button size="l" onClick={onSubmitHandler} type="submit" pending={isLoading} disabled={!text}>
                    {t('Comment_send')}
                </Button>
            </form>
            {error && <div className={s.error}>{renderError()}</div>}
        </>
    );
});

AddCommentForm.displayName = 'AddCommentForm';
