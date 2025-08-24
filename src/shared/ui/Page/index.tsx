import React, { MutableRefObject, useCallback, useRef } from 'react';
import { useInfiniteScroll } from 'src/shared/hooks/useInifiniteScroll';
import classNames from 'classnames';
import s from './index.scss';
interface Props {
    className?: string;
    callback?: () => void;
}

export const Page: React.FC<Props> = (props) => {
    const { children, className, callback } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({ callback, wrapperRef, triggerRef });

    return (
        <section ref={wrapperRef} className={classNames(s.pageWrapper, className)}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
