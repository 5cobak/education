import { CSSProperties, memo } from 'react';
import cls from './index.scss';
import classNames from 'classnames';

export interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return <div className={classNames(cls.skeleton, {}, [className])} style={styles} />;
});

Skeleton.displayName = 'Skeleton';
