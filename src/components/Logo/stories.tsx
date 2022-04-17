import React from 'react';

import { Logo, LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo
};

export const Default = (args: LogoProps) => <Logo {...args} />;
