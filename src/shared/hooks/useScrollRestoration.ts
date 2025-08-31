import { useEffect, RefObject, useReducer } from 'react';
import { debounce } from '../utils/debounce/debounce';

type UseScrollRestorationOptions = {
    key: string; // уникальный ключ для localStorage
    ref: RefObject<HTMLElement>; // контейнер, если нужен не window
    smooth?: boolean; // плавный скролл при восстановлении
};

export function useScrollRestoration({ key, ref, smooth = false }: UseScrollRestorationOptions) {
    const forceUpdate = useReducer(() => 1, 0)[1];

    useEffect(() => {
        if (!ref.current) {
            forceUpdate();
            return;
        }

        const storageKey = `scroll-${key}`;

        const getScrollPosition = () => ref.current?.scrollTop ?? 0;

        const scrollToPosition = (position: number) => {
            ref.current?.scrollTo({
                top: position,
                behavior: smooth ? 'smooth' : 'auto',
            });
        };

        // Восстановление позиции при монтировании
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            scrollToPosition(parseInt(saved, 10));
        }

        // Слушаем скролл и сохраняем позицию
        const handleScroll = debounce(() => {
            localStorage.setItem(storageKey, String(getScrollPosition()));
        }, 400);

        ref.current.addEventListener('scroll', handleScroll);

        // Чистим слушатель при размонтировании
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            () => ref.current?.removeEventListener('scroll', handleScroll);
        };
    }, [key, ref, smooth, forceUpdate]);
}
