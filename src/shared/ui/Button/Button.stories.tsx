import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { Button, ButtonProps, ButtonTheme, ButtonVariant } from './';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary: Story<ButtonProps> = Template.bind({});

Primary.args = {
  children: 'Text',
};

export const Clear: Story<ButtonProps> = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.Clear,
};

export const Outline: Story<ButtonProps> = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.Outline,
};

export const OutlineDark: Story<ButtonProps> = Template.bind({});

OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OutlineDark,
};

export const SquareM: Story<ButtonProps> = Template.bind({});

SquareM.args = {
  children: '-',
  buttonVariant: ButtonVariant.Square,
  size: 'm',
};

export const SquareL: Story<ButtonProps> = Template.bind({});

SquareL.args = {
  children: '-',
  buttonVariant: ButtonVariant.Square,
  size: 'l',
};

export const SquareXL: Story<ButtonProps> = Template.bind({});

SquareXL.args = {
  children: '-',
  buttonVariant: ButtonVariant.Square,
  size: 'xl',
};

export const CircleM: Story<ButtonProps> = Template.bind({});

CircleM.args = {
  children: 'o',
  buttonVariant: ButtonVariant.Circle,
  size: 'm',
};

export const CircleL: Story<ButtonProps> = Template.bind({});

CircleL.args = {
  children: 'o',
  buttonVariant: ButtonVariant.Circle,
  size: 'l',
};

export const CircleXL: Story<ButtonProps> = Template.bind({});

CircleXL.args = {
  children: 'o',
  buttonVariant: ButtonVariant.Square,
  size: 'xl',
};

export const ButtonDisabled: Story<ButtonProps> = Template.bind({});

ButtonDisabled.args = {
  children: 'Button',
  disabled: true,
};

export const ButtonDisabledDark: Story<ButtonProps> = Template.bind({});

ButtonDisabledDark.args = {
  children: 'Button',
  disabled: true,
};

ButtonDisabledDark.decorators = [ThemeDecorator(Theme.Dark)];

export const ButtonPending: Story<ButtonProps> = Template.bind({});

ButtonPending.args = {
  children: 'Button',
  pending: true,
};

export const ButtonPendingDark: Story<ButtonProps> = Template.bind({});

ButtonPendingDark.args = {
  children: 'Button',
  pending: true,
};

ButtonPendingDark.decorators = [ThemeDecorator(Theme.Dark)];
