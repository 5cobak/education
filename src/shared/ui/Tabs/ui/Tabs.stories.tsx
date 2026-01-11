import { ComponentMeta, ComponentStory, Story, } from '@storybook/react';
import { Tabs, TabsProps } from './Tabs';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabsLight: Story<TabsProps> = Template.bind({});

TabsLight.args = {
    tabs: [
        { label: '1', value: 'first' },
        { label: '2', value: 'second' },
        { label: '3', value: 'third' },
    ],
    activeTab: { label: '1', value: 'first' },
    onChange: 
};

export const TabsDark: Story<TabsProps> = Template.bind({});

TabsDark.args = {
    tabs: [
        { label: '1', value: 'first' },
        { label: '2', value: 'second' },
        { label: '3', value: 'third' },
    ],

    activeTab: { label: '1', value: 'first' },
};

TabsDark.decorators = [ThemeDecorator(Theme.Dark)];
