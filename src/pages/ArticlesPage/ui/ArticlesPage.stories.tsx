import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { Theme } from 'src/shared/lib/theme';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';

export default {
    title: 'pages/ArticlePage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const ArticlesPageLight: Story = Template.bind({});

ArticlesPageLight.args = {
    children: '',
};

export const ArticlesPageDark: Story = Template.bind({});

ArticlesPageDark.args = {
    children: '',
};

ArticlesPageDark.decorators = [ThemeDecorator(Theme.Dark)];
