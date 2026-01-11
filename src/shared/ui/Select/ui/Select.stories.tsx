import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Select as SelectComponent, SelectProps } from './Select';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
    title: 'shared/Select',
    component: SelectComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SelectComponent>;

const Template: ComponentStory<typeof SelectComponent> = (args) => <SelectComponent {...args} />;

export const Select: Story<SelectProps<string>> = Template.bind({});

Select.args = {
    options: [
        { label: 'Москва', value: 'moscow' },
        { label: 'Санкт-Петербург', value: 'spb' },
        { label: 'Казань', value: 'kazan' },
    ],
};

export const SelectWithCustomLabel: Story<SelectProps<string>> = Template.bind({});

SelectWithCustomLabel.args = {
    options: [
        { label: 'Москва', value: 'moscow' },
        { label: 'Санкт-Петербург', value: 'spb' },
        { label: 'Казань', value: 'kazan' },
    ],
    customLabel: 'Сортировать ПО:',
};

export const SelectDark: Story<SelectProps<string>> = Template.bind({});

SelectDark.args = {
    options: [
        { label: 'Москва', value: 'moscow' },
        { label: 'Санкт-Петербург', value: 'spb' },
        { label: 'Казань', value: 'kazan' },
    ],
};

SelectDark.decorators = [ThemeDecorator(Theme.Dark)];
