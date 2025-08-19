import { useEffect } from 'react';

export const useInitEffect = (callback: () => void, depose?: () => void) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }

        return () => {
            depose?.();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
