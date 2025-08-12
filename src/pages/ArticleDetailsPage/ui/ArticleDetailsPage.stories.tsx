import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import ArticleDetailsPageComponent from './ArticleDetailsPage';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
    title: '',
    component: ArticleDetailsPageComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageComponent>;

const Template: ComponentStory<typeof ArticleDetailsPageComponent> = (args) => <ArticleDetailsPageComponent />;

export const ArticleDetailsPage: Story = Template.bind({});

ArticleDetailsPage.args = {
    children: '',
};

export const ArticleDetailsPageDark: Story = Template.bind({});

ArticleDetailsPageDark.args = {
    children: '',
};

ArticleDetailsPageDark.decorators = [ThemeDecorator(Theme.Dark)];
