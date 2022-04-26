import React from 'react';

import { Banner, BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner
};

export const Exemple = (args: BannerProps) => <Banner {...args} />;

Exemple.args = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
};
