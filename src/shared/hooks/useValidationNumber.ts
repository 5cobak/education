import { useEffect, useState } from 'react';

export const useValidationNumber = (value?: string) => {
    const [number, setNumber] = useState<string>();

    useEffect(() => {
        const num = Number(value);

        if (Number.isInteger(num)) {
            setNumber(value);
        }
    }, [value]);

    return number;
};
