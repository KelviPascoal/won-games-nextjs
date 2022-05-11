import React from 'react';

import { BannerSlider, BannerSliderProps } from '.';
import { bannersMock } from './mock';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen'
  }
};

export const Exemple = (args: BannerSliderProps) => <BannerSlider {...args} />;

Exemple.args = {
  items: bannersMock
};
