import { useState, useRef, useEffect, useCallback } from 'react';
import s from './Select.scss';
import { Text } from '../../Text';
import { v4 as uid } from 'uuid';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

export type Option<T extends string> = {
    label: string;
    value: T;
};

export interface SelectProps<T extends string> {
    options: Option<T>[];
    placeholder?: string;
    value?: T;
    title?: string;
    customLabel?: string;
    onChange?: (value: T) => void;
    containerCls?: string;
}

export const Select = <T extends string>({
    options,
    placeholder,
    value,
    onChange,
    title,
    customLabel,
    containerCls,
}: SelectProps<T>) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Option<T> | null>(options.find((o) => o.value === value) || null);
    const ref = useRef<HTMLDivElement>(null);
    const uidButtonRef = useRef<string>(uid());
    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = useCallback(
        (option: Option<T>) => {
            setSelected(option);
            onChange?.(option.value);
            setOpen(false);
        },
        [setSelected, onChange]
    );

    return (
        <div ref={ref} className={classNames(s.select, containerCls)}>
            <label htmlFor={uidButtonRef.current}>
                <Text>{title}</Text>
            </label>

            <button
                id={uidButtonRef.current}
                type="button"
                onClick={() => {
                    setOpen((prev) => !prev);
                }}
                className={s.trigger}
            >
                {customLabel && <span className={s.customLabel}>{customLabel}</span>}
                <span className={` ${selected ? '' : s.placeholder}`}>
                    {selected ? selected.label : placeholder ? placeholder : t('select_placeholder')}
                </span>
                <span className={`${s.arrow} ${open ? s.open : ''}`}>▼</span>
            </button>

            {open && (
                <ul className={s.dropdown}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSelect(option);
                            }}
                            className={`${s.option} ${selected?.value === option.value ? s.selected : ''}`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

Select.displayName = 'Select';
