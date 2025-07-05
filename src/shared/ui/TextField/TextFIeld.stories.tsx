import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { TextField, TextFieldProps } from './';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
  title: 'shared/TextField',
  component: TextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Field: Story<TextFieldProps> = Template.bind({});

Field.args = {
  name: 'Field',
};

export const FieldDark: Story<TextFieldProps> = Template.bind({});

FieldDark.args = {
  name: 'Field Dark',
};

FieldDark.decorators = [ThemeDecorator(Theme.Dark)];
