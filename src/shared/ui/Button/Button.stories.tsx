import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { Button, ButtonTheme, ButtonVariant } from './';
import { ThemeDecorator } from 'src/shared/config/storybook/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme/ThemeContext';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  children: 'Text',
};

export const Clear: Story = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.Clear,
};

export const Outline: Story = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.Outline,
};

export const OutlineDark: Story = Template.bind({});

OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OutlineDark,
};

export const SquareM: Story = Template.bind({});

SquareM.args = {
  children: '-',
  buttonVariant: ButtonVariant.Square,
  size: 'm',
};

export const SquareL: Story = Template.bind({});

SquareL.args = {
  children: '-',
  buttonVariant: ButtonVariant.Square,
  size: 'l',
};

export const SquareXL: Story = Template.bind({});

SquareXL.args = {
  children: '-',
  buttonVariant: ButtonVariant.Square,
  size: 'xl',
};

export const CircleM: Story = Template.bind({});

CircleM.args = {
  children: 'o',
  buttonVariant: ButtonVariant.Circle,
  size: 'm',
};

export const CircleL: Story = Template.bind({});

CircleL.args = {
  children: 'o',
  buttonVariant: ButtonVariant.Circle,
  size: 'l',
};

export const CircleXL: Story = Template.bind({});

CircleXL.args = {
  children: 'o',
  buttonVariant: ButtonVariant.Square,
  size: 'xl',
};
