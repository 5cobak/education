import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Modal, ModalProps } from './';
import { ThemeDecorator } from 'src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'src/shared/lib/theme/ThemeContext';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => <Modal {...args} />;

export const ModalLight: Story<ModalProps> = Template.bind({});

ModalLight.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos minima magnam sint, nesciunt, officia suscipit voluptates molestiae ipsam error aperiam in quod culpa ut ullam at animi porro. Veniam, sed.',
  isOpen: true,
};

export const ModalDark: Story<ModalProps> = Template.bind({});

ModalDark.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos minima magnam sint, nesciunt, officia suscipit voluptates molestiae ipsam error aperiam in quod culpa ut ullam at animi porro. Veniam, sed.',
  isOpen: true,
};

ModalDark.decorators = [ThemeDecorator(Theme.Dark)];
