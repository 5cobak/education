import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { ArticleDetails as ArticleDetailsComponent } from './ArticleDetails';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetailsComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComponent>;

const Template: ComponentStory<typeof ArticleDetailsComponent> = (args) => <ArticleDetailsComponent {...args} />;

export const ArticleDetails: Story = Template.bind({});

ArticleDetails.args = {
    children: '',
};

export const ArticleDetailsDark: Story = Template.bind({});

ArticleDetailsDark.args = {
    children: '',
};

ArticleDetailsDark.decorators = [ThemeDecorator(Theme.Dark)];
