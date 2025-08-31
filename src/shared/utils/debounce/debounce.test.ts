import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
    let mockFn: jest.Mock;

    beforeEach(() => {
        mockFn = jest.fn();
        jest.clearAllTimers();
    });

    it('вызывает функцию один раз после задержки', () => {
        const debounced = debounce(mockFn, 500);

        debounced();
        debounced();
        debounced();

        // Функция ещё не вызвана
        expect(mockFn).not.toBeCalled();

        // Прокручиваем время на 500 мс
        jest.advanceTimersByTime(500);

        // Функция вызвалась только один раз
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('не вызывает функцию несколько раз при быстрых вызовах', () => {
        const debounced = debounce(mockFn, 300);

        debounced();
        jest.advanceTimersByTime(100);
        debounced();
        jest.advanceTimersByTime(100);
        debounced();

        // До истечения задержки вызовов нет
        expect(mockFn).not.toBeCalled();

        jest.advanceTimersByTime(300);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
