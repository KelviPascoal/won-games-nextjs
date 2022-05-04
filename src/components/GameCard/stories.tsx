import React from 'react';

import { GameCard, GameCardProps } from '.';

export default {
  title: 'GameCard',

  component: GameCard
};

export const Default = (args: GameCardProps) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />;
  </div>
);

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
};

Default.args = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/project-winter.jpg',
  price: 'R$ 235,00',
  promotionalPrice: 'R$ 200,00'
};
Default.argTypes = {
  onFav: { action: 'clicked' }
};

export const WithRibbon = (args: GameCardProps) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />;
  </div>
);

WithRibbon.parameters = {
  backgrounds: {
    default: 'dark'
  }
};

WithRibbon.args = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/project-winter.jpg',
  price: 'R$ 235,00',
  promotionalPrice: 'R$ 200,00',
  ribbon: 'On high'
};
