import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Skeleton as SkeletonComponent, SkeletonProps } from './Skeleton';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
    title: 'shared/Skeleton',
    component: SkeletonComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SkeletonComponent>;

const Template: ComponentStory<typeof SkeletonComponent> = (args: SkeletonProps) => <SkeletonComponent {...args} />;

export const Skeleton: Story<SkeletonProps> = Template.bind({});

Skeleton.args = {
    border: '50%',
    width: 200,
    height: 200,
};

export const SkeletonDark: Story<SkeletonProps> = Template.bind({});

SkeletonDark.args = {
    border: '50%',
    width: 200,
    height: 200,
};

SkeletonDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SkeletonSquare: Story<SkeletonProps> = Template.bind({});

SkeletonSquare.args = {
    width: 200,
    height: 200,
};

export const SkeletonRectangle: Story<SkeletonProps> = Template.bind({});

SkeletonSquare.args = {
    width: 200,
    height: 50,
};
