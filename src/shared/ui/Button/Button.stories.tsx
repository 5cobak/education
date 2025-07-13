import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { Button, ButtonProps } from './';
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
    children: 'Button',
};
export const PrimaryDark: Story<ButtonProps> = Template.bind({});

PrimaryDark.args = {
    children: 'Button',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];

export const Clear: Story<ButtonProps> = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: 'clear',
};

export const Outline: Story<ButtonProps> = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: 'outline',
};

export const OutlineDark: Story<ButtonProps> = Template.bind({});

OutlineDark.args = {
    children: 'Button',
    theme: 'outlineDark',
};

export const SquareM: Story<ButtonProps> = Template.bind({});

SquareM.args = {
    children: '-',
    buttonVariant: 'square',
    size: 'm',
};

export const SquareL: Story<ButtonProps> = Template.bind({});

SquareL.args = {
    children: '-',
    buttonVariant: 'square',
    size: 'l',
};

export const SquareXL: Story<ButtonProps> = Template.bind({});

SquareXL.args = {
    children: '-',
    buttonVariant: 'square',
    size: 'xl',
};

export const CircleM: Story<ButtonProps> = Template.bind({});

CircleM.args = {
    children: 'o',
    buttonVariant: 'circle',
    size: 'm',
};

export const CircleL: Story<ButtonProps> = Template.bind({});

CircleL.args = {
    children: 'o',
    buttonVariant: 'circle',
    size: 'l',
};

export const CircleXL: Story<ButtonProps> = Template.bind({});

CircleXL.args = {
    children: 'o',
    buttonVariant: 'square',
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
export const Success: Story<ButtonProps> = Template.bind({});

Success.args = {
    children: 'Apply',
    theme: 'success',
};
export const SuccessDark: Story<ButtonProps> = Template.bind({});

SuccessDark.args = {
    children: 'Apply',
    theme: 'success',
};

SuccessDark.decorators = [ThemeDecorator(Theme.Dark)];

export const Cancel: Story<ButtonProps> = Template.bind({});

Cancel.args = {
    children: 'Button',
    theme: 'cancel',
};

export const CancelDark: Story<ButtonProps> = Template.bind({});

CancelDark.args = {
    children: 'Button',
    theme: 'cancel',
};

CancelDark.decorators = [ThemeDecorator(Theme.Dark)];
