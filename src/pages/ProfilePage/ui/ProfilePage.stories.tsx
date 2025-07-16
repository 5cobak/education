import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import ProfilePageComponent from './ProfilePage';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePageComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePageComponent>;

const Template: ComponentStory<typeof ProfilePageComponent> = () => <ProfilePageComponent />;

export const ProfilePage: Story = Template.bind({});

ProfilePage.args = {
  children: '',
};

export const ProfilePageDark: Story = Template.bind({});

ProfilePageDark.args = {
  children: '',
};

ProfilePageDark.decorators = [ThemeDecorator(Theme.Dark)];
