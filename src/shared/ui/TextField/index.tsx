import React, { InputHTMLAttributes, memo, useCallback, useEffect, useRef } from 'react';
import s from './index.scss';
import classNames from 'classnames';
import { Message } from 'src/shared/utils/translationUtils';
import { Text } from '../Text/ui/Text';
import { useTranslation } from 'react-i18next';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    changeHandler?: (value: string) => void;
    value?: string;

    autoFocus?: boolean;
    wrapperClassName?: string;
    width?: 'm' | 'l' | 'xl';
    errorMessage?: Message | null;
    label?: string;
}

export const TextField = memo(
    ({
        changeHandler,
        wrapperClassName,
        autoFocus = false,
        value = '',
        width = 'l',
        errorMessage,
        label,
        disabled,
        ...otherProps
    }: TextFieldProps) => {
        const { t } = useTranslation();
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if (autoFocus) {
                inputRef.current?.focus();
            }
        }, [autoFocus]);

        const onChangeHandler = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                changeHandler?.(e.target.value);
            },

            [changeHandler]
        );

        const inputMods = {
            [s[`width-${width}`]]: true,
        };

        const labelMods = {
            [s['disabled']]: disabled,
        };

        return (
            <div className={classNames(s.inputWrapper, wrapperClassName, inputMods)}>
                <label className={classNames(s.label, labelMods)}>
                    {label}
                    <input
                        ref={inputRef}
                        type="text"
                        className={s.input}
                        value={value}
                        onChange={onChangeHandler}
                        disabled={disabled}
                        {...otherProps}
                    />
                </label>

                {errorMessage && <Text textVariant="error">{t(errorMessage.key, errorMessage.params)}</Text>}
            </div>
        );
    }
);

TextField.displayName = 'TextField';
