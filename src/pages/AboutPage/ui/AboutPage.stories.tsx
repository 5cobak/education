import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { ThemeDecorator } from 'src/shared/config/storybook/ThemeDecorator';

import { AboutPage as AboutPageComponent } from '..';
import { Theme } from 'src/shared/lib/theme/ThemeContext';

export default {
  title: 'pages/AboutPage',
  component: AboutPageComponent,
} as ComponentMeta<typeof AboutPageComponent>;

const Template: ComponentStory<typeof AboutPageComponent> = (args) => <AboutPageComponent {...args} />;

export const AboutPage: Story = Template.bind({});
export const AboutPageDarkTheme: Story = Template.bind({});

AboutPageDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
