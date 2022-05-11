import React from 'react';

import { Highlight, HighlightProps } from '.';
import { highlightMock } from './mock';

export default {
  title: 'Highlight',
  component: Highlight
};

export const Default = (args: HighlightProps) => <Highlight {...args} />;

Default.args = { ...highlightMock };

export const WithFloatImage = (args: HighlightProps) => <Highlight {...args} />;

WithFloatImage.args = {
  ...highlightMock,
  floatImage: 'img/Image.png'
};
