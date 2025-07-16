import { Story } from '@storybook/react';
import { GlobalState, StoreProvider } from 'src/app/providers/StoreProvider';
import 'src/app/styles/main.scss';
import { profileReducer } from 'src/entities/Profile';
import { userReducer } from 'src/entities/User';

const defaultAsyncReducers = {
    user: userReducer,
    profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<GlobalState>) => (StoryComponent: Story) => {
    return (
        <StoreProvider state={state} asyncReducers={defaultAsyncReducers}>
            <StoryComponent />
        </StoreProvider>
    );
};
