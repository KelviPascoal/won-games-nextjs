import React from 'react';

import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu
};

export const Default = () => <Menu />;

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
};
