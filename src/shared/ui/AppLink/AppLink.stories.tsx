import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import AppLink, { AppLinkTheme } from '.';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme/ThemeContext';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  children: 'go to main',
  to: './main',
};

export const PrimaryDarkTheme: Story = Template.bind({});

PrimaryDarkTheme.args = {
  children: 'go to main',
  to: './main',
};

PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];

export const Secondary: Story = Template.bind({});

Secondary.args = {
  children: 'go to about',
  to: './about',
  theme: AppLinkTheme.Secondary,
};

export const SecondaryDarkTheme: Story = Template.bind({});

SecondaryDarkTheme.args = {
  children: 'go to about',
  to: './about',
  theme: AppLinkTheme.Secondary,
};

SecondaryDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
