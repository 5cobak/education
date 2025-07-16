import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Profile } from './Profile';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';
import { StoreDecorator } from 'src/shared/config/storybook/decorators/StoreDecorator';
import { GlobalState } from 'src/app/providers/StoreProvider';

const state: DeepPartial<GlobalState> = {
    profile: {
        form: {
            firstName: 'Victor',
            lastName: 'Petrovich',
            age: '55',
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'sigma',
            avatar: 'https://i.pinimg.com/736x/44/7c/dd/447cdd33a5bfa514e225f79ad793f86b.jpg',
        },
        data: {
            firstName: 'Victor',
            lastName: 'Petrovich',
            age: '55',
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'sigma',
            avatar: 'https://i.pinimg.com/736x/44/7c/dd/447cdd33a5bfa514e225f79ad793f86b.jpg',
        },
        isEditable: true,
    },
};

export default {
    title: 'entities/profile',
    component: Profile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile />;

export const ProfileEditable: Story = Template.bind({});

ProfileEditable.decorators = [StoreDecorator(state)];

export const ProfileDark: Story = Template.bind({});

ProfileDark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.Dark)];

export const ProfileWithErrors: Story = Template.bind({});

ProfileWithErrors.decorators = [StoreDecorator({ profile: { form: {}, isEditable: true } })];

export const ProfileNotEditable: Story = Template.bind({});

ProfileNotEditable.decorators = [StoreDecorator({ profile: { form: state.profile?.form, isEditable: false } })];
