import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Avatar as AvatarComponent, Props } from './Avatar';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
    title: 'shared/avatar',
    component: AvatarComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args: Props) => <AvatarComponent {...args} />;

export const Avatar: Story<Props> = Template.bind({});

Avatar.args = {
    src: 'https://i.pinimg.com/736x/44/7c/dd/447cdd33a5bfa514e225f79ad793f86b.jpg',
};

export const AvatarDark: Story<Props> = Template.bind({});

AvatarDark.args = {
    src: 'https://i.pinimg.com/736x/44/7c/dd/447cdd33a5bfa514e225f79ad793f86b.jpg',
};

AvatarDark.decorators = [ThemeDecorator(Theme.Dark)];
