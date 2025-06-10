import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { ThemeDecorator } from 'src/shared/config/storybook/ThemeDecorator';

import { MainPage as MainPageComponent } from '..';
import { Theme } from 'src/shared/lib/theme/ThemeContext';

export default {
  title: 'pages/MainPage',
  component: MainPageComponent,
} as ComponentMeta<typeof MainPageComponent>;

const Template: ComponentStory<typeof MainPageComponent> = (args) => <MainPageComponent {...args} />;

export const MainPage: Story = Template.bind({});
export const MainPageDarkTheme: Story = Template.bind({});

MainPageDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
