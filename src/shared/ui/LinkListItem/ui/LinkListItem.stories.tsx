import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { LinkListItem as LinkListItemComponent, LinkListItemProps } from './LinkListItem';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme';

export default {
  title: 'shared/LinkListItem',
  component: LinkListItemComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LinkListItemComponent>;

const Template: ComponentStory<typeof LinkListItemComponent> = (args) => <LinkListItemComponent {...args} />;

export const LinkListItem: Story<LinkListItemProps> = Template.bind({});

LinkListItem.args = {
  children: 'Link',
  icon: '->',
  path: '/',
};

export const LinkListItemDark: Story<LinkListItemProps> = Template.bind({});

LinkListItemDark.args = {
  children: 'Link dark',
  icon: '->',
  path: '/next',
};

LinkListItemDark.decorators = [ThemeDecorator(Theme.Dark)];

export const LinkListItemCollapsed: Story<LinkListItemProps> = Template.bind({});

LinkListItemCollapsed.args = {
  children: 'Link dark',
  icon: '->',
  collapsed: true,
  path: '/about',
};
