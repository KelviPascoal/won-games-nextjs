import React from 'react';

import { Highlight, HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight
};

export const Default = (args: HighlightProps) => <Highlight {...args} />;

Default.args = {
  title: 'Read Dead is back!',
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '#',
  backgroundImage: 'img/BackgroundHighlight.svg'
};

export const WithFloatImage = (args: HighlightProps) => <Highlight {...args} />;

WithFloatImage.args = {
  title: 'Read Dead is back!',
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '#',
  backgroundImage: 'img/BackgroundHighlight.svg',
  floatImage: 'img/Image.png'
};
