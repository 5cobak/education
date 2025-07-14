import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectProfileError } from './selectProfileError';
import { ApiError } from 'src/shared/api';

describe('test selectProfileError.test', () => {
    test('test get error field', () => {
        const state: DeepPartial<GlobalState> = {
            profile: {
                error: ApiError.AUTH_ERROR,
            },
        };
        expect(selectProfileError(state as GlobalState)).toEqual(ApiError.AUTH_ERROR);
    });
});
