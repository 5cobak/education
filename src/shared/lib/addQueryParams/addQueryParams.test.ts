import { addQueryParams } from './addQueryParams';

describe('query params helpers', () => {
    const originalLocation = window.location;
    const originalPushState = window.history.pushState;

    beforeEach(() => {
        // mock window.location
        delete (window as any).location;
        (window as any).location = {
            search: '',
        };

        // mock pushState
        window.history.pushState = jest.fn();
    });

    afterEach(() => {
        // @ts-ignore
        window.location = originalLocation;
        window.history.pushState = originalPushState;
        jest.clearAllMocks();
    });

    it('adds new query params', () => {
        window.location.search = '';

        addQueryParams({ foo: 'bar', baz: '1' });

        expect(window.history.pushState).toHaveBeenCalledWith(null, '', '?foo=bar&baz=1');
    });

    it('keeps existing query params', () => {
        window.location.search = '?page=2';

        addQueryParams({ sort: 'asc' });

        expect(window.history.pushState).toHaveBeenCalledWith(null, '', '?page=2&sort=asc');
    });

    it('overwrites existing param with the same name', () => {
        window.location.search = '?page=2';

        addQueryParams({ page: '3' });

        expect(window.history.pushState).toHaveBeenCalledWith(null, '', '?page=3');
    });

    it('ignores empty values', () => {
        window.location.search = '?page=2';

        addQueryParams({ page: '', filter: 'active' });

        expect(window.history.pushState).toHaveBeenCalledWith(null, '', '?page=2&filter=active');
    });

    it('does not add params with falsy values', () => {
        window.location.search = '';

        addQueryParams({ foo: '', bar: 'test' });

        expect(window.history.pushState).toHaveBeenCalledWith(null, '', '?bar=test');
    });
});
