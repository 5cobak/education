import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { AuthForm as AuthFormComponent } from './AuthForm';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme/ThemeContext';

export default {
  title: 'feature/AuthForm',
  component: AuthFormComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AuthFormComponent>;

const Template: ComponentStory<typeof AuthFormComponent> = (args) => <AuthFormComponent {...args} />;

export const AuthForm: Story = Template.bind({});

AuthForm.args = {
  username: 'Ilon',
  password: '123',
};

export const AuthFormDark: Story = Template.bind({});

AuthFormDark.args = {
  username: 'Ilon',
  password: '123',
};

AuthFormDark.decorators = [ThemeDecorator(Theme.Dark)];
