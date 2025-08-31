import { Counter } from 'src/entities/Counter/ui/Counter';
import { Page } from 'src/shared/ui/Page';

const MAIN_PAGE_SCROLL_POSITION = 'MAIN_PAGE_SCROLL_POSITION';

const MainPage = () => {
    return (
        <Page storageKey={MAIN_PAGE_SCROLL_POSITION}>
            <Counter />
        </Page>
    );
};

export default MainPage;
