import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import AuthFormComponent from './AuthForm';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme/ThemeContext';

export default {
  title: 'feature/AuthForm',
  component: AuthFormComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AuthFormComponent>;

const Template: ComponentStory<typeof AuthFormComponent> = () => <AuthFormComponent />;

export const AuthForm: Story = Template.bind({});

export const AuthFormDark: Story = Template.bind({});

AuthFormDark.decorators = [ThemeDecorator(Theme.Dark)];
