import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Loader as LoaderComponent } from '.';
import { ThemeDecorator } from 'src/shared/config/storybook/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme/ThemeContext';

export default {
  title: 'shared/Loader',
  component: LoaderComponent,
  parameters: {
    layout: 'flex',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoaderComponent>;

const Template: ComponentStory<typeof LoaderComponent> = () => <LoaderComponent />;

export const Loader: Story = Template.bind({});

export const LoaderDarkTheme: Story = Template.bind({});

LoaderDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
