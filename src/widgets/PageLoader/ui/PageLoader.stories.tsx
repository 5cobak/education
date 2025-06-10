import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { PageLoader as PageLoaderComponent } from './PageLoader';
import { ThemeDecorator } from 'src/shared/config/storybook/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme/ThemeContext';

export default {
  title: 'widgets/PageLoader',
  component: PageLoaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageLoaderComponent>;

const Template: ComponentStory<typeof PageLoaderComponent> = () => <PageLoaderComponent />;

export const PageLoader: Story = Template.bind({});

export const PageLoaderDarkTheme: Story = Template.bind({});

PageLoaderDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
