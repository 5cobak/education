import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';

import MainPageComponent from './MainPage';
import { Theme } from 'src/shared/lib/theme';

export default {
  title: 'pages/MainPage',
  component: MainPageComponent,
} as ComponentMeta<typeof MainPageComponent>;

const Template: ComponentStory<typeof MainPageComponent> = () => <MainPageComponent />;

export const MainPage: Story = Template.bind({});
export const MainPageDarkTheme: Story = Template.bind({});

MainPageDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
