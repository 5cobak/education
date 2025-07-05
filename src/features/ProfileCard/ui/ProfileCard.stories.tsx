import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
  title: 'features/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const ProfileCardLight: Story = Template.bind({});

ProfileCardLight.args = {
  children: '',
};

export const ProfileCardDark: Story = Template.bind({});

ProfileCardDark.args = {
  children: '',
};

ProfileCardDark.decorators = [ThemeDecorator(Theme.Dark)];
