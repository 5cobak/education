import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { NavBar as NavBarComponent } from './NavBar';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
  title: 'widgets/Navbar',
  component: NavBarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavBarComponent>;

const Template: ComponentStory<typeof NavBarComponent> = (args) => <NavBarComponent {...args} />;

export const NavBar: Story = Template.bind({});

export const NavBarDarkTheme: Story = Template.bind({});

NavBarDarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
