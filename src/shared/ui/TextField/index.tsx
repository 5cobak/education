import React, { InputHTMLAttributes, useCallback, useEffect, useRef } from 'react';
import s from './index.scss';
import classNames from 'classnames';
import { TextFieldWidth } from './types';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  changeHandler?: (value: string) => void;
  value: string;

  autoFocus?: boolean;
  wrapperClassName?: string;
  width?: TextFieldWidth;
}

export const TextField: React.FC<TextFieldProps> = ({
  changeHandler,
  wrapperClassName,
  autoFocus = false,
  value,
  width = TextFieldWidth.l,
  ...otherProps
}) => {
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

  const mods = {
    [s[width]]: true,
  };

  return (
    <div className={classNames(s.inputWrapper, wrapperClassName, mods)}>
      {otherProps.name && (
        <label className={s.label} htmlFor={otherProps.name}>
          {otherProps.name}
        </label>
      )}
      <input ref={inputRef} type="text" className={s.input} value={value} onChange={onChangeHandler} {...otherProps} />
    </div>
  );
};
