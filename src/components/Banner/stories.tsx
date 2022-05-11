import React from 'react';

import { Banner, BannerProps } from '.';
import { bannerMock } from './mock';

export default {
  title: 'Banner',
  component: Banner
};

export const Exemple = (args: BannerProps) => <Banner {...args} />;

Exemple.args = { ...bannerMock };
