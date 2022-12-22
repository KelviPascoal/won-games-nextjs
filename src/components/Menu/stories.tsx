import React from 'react';

import { Menu, MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu
};

export const Default = (args: MenuProps) => <Menu {...args} />;

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
};
