import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';

import AboutPageComponent from './AboutPage';
import { Theme } from 'src/shared/lib/theme';

export default {
  title: 'pages/AboutPage',
  component: AboutPageComponent,
} as ComponentMeta<typeof AboutPageComponent>;

const Template: ComponentStory<typeof AboutPageComponent> = () => <AboutPageComponent />;

export const AboutPage: Story = Template.bind({});
export const AboutPageDarkTheme: Story = Template.bind({});

AboutPageDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
