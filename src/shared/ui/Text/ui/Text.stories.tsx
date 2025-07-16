import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Text, TextProps } from './Text';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextLightTheme: Story<TextProps> = Template.bind({});

TextLightTheme.args = {
  children: 'Lorem ipsum text, which need for example',
};

export const TextDarkTheme: Story<TextProps> = Template.bind({});

TextDarkTheme.args = {
  children: 'Lorem ipsum text, which need for example',
};

TextDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];

export const TextLightThemeWithTitle: Story<TextProps> = Template.bind({});

TextLightThemeWithTitle.args = {
  children: 'Lorem ipsum text, which need for example',
  title: 'Title of the text',
};

export const TextLightDarkWithTitle: Story<TextProps> = Template.bind({});

TextLightDarkWithTitle.args = {
  children: 'Lorem ipsum text, which need for example',
  title: 'Title of the text',
};

TextLightDarkWithTitle.decorators = [ThemeDecorator(Theme.Dark)];

export const TextError: Story<TextProps> = Template.bind({});

TextError.args = {
  children: 'Lorem ipsum text, which need for example',
  title: 'Title of the text',
  textVariant: 'error',
};

export const TextErrorDarkTheme: Story<TextProps> = Template.bind({});

TextErrorDarkTheme.args = {
  children: 'Lorem ipsum text, which need for example',
  title: 'Title of the text',
  textVariant: 'error',
};

TextErrorDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
