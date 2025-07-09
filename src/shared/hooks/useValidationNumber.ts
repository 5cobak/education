import { useEffect, useState } from 'react';
import { Message } from '../utils/translationUtils';

export const useValidationNumber = (value?: string | number) => {
    const [number, setNumber] = useState<number>();
    const [error, setError] = useState<Message | null>(null);

    useEffect(() => {
        if (typeof value === 'number') {
            if (error) {
                setError(null);
            }
            setNumber(value);
        } else {
            setError({ key: 'validationNumber_error' });
        }
    }, [value, error]);

    return { number: String(number), error };
};
