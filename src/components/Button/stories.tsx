import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      control: {
        type: null
      }
    }
  }
} as Meta;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy now'
};

export const WithIcon: Story = (args) => <Button {...args} />;

WithIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />
};

export const AsLink: Story = (args) => <Button {...args} />;

AsLink.args = {
  children: 'Buy now',
  as: 'a'
};
