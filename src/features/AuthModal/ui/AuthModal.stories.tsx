import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { AuthModal, AuthModelProps } from './AuthModal';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme/ThemeContext';
import { ReactNode } from 'react';

export default {
  title: 'features/AuthModal',
  component: AuthModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AuthModal>;

const Template: ComponentStory<typeof AuthModal> = (args) => <AuthModal {...args} />;

export const AuthModalLight: Story<AuthModelProps & ReactNode> = Template.bind({});

AuthModalLight.args = {
  children: '',
  isOpen: true,
};

export const AuthModalDark: Story<AuthModelProps & ReactNode> = Template.bind({});

AuthModalDark.args = {
  children: '',
  isOpen: true,
};

AuthModalDark.decorators = [ThemeDecorator(Theme.Dark)];
