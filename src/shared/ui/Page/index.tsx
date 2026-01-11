import React, { MutableRefObject, useRef } from 'react';
import { useInfiniteScroll } from 'src/shared/hooks/useInifiniteScroll';
import classNames from 'classnames';
import s from './index.scss';
import { useScrollRestoration } from 'src/shared/hooks/useScrollRestoration';

interface Props {
    storageKey: string;
    className?: string;
    callback?: () => void;
}

export const Page: React.FC<Props> = (props) => {
    const { children, className, callback, storageKey } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useScrollRestoration({ key: storageKey, smooth: true, ref: wrapperRef });

    useInfiniteScroll({ callback, wrapperRef, triggerRef });

    return (
        <section ref={wrapperRef} className={classNames(s.pageWrapper, className)}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
