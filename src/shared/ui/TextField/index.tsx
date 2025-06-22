import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import s from './index.scss';
import classNames from 'classnames';
import { TextFieldWidth } from './types';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  changeHandler: (value: string) => void;
  wrapperClassName?: string;
  width?: TextFieldWidth;
}

export const TextField: React.FC<TextFieldProps> = ({
  changeHandler,
  wrapperClassName,
  width = TextFieldWidth.l,
  ...otherProps
}) => {
  const [value, onChange] = useState('');

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
      changeHandler(e.target.value);
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
      <input type="text" className={s.input} value={value} onChange={onChangeHandler} {...otherProps} />
    </div>
  );
};
