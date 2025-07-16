import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Sidebar as SidebarComponent } from './Sidebar';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
  title: 'widgets/Sidebar',
  component: SidebarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SidebarComponent>;

const Template: ComponentStory<typeof SidebarComponent> = (args) => <SidebarComponent {...args} />;

export const Sidebar: Story = Template.bind({});

export const SidebarDarkTheme: Story = Template.bind({});

SidebarDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
