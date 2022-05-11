import React from 'react';

import { GameCardSlider, GameCardSliderProps } from '.';
import { gamesMock } from './mock';

export default {
  title: 'GameCardSlider',
  component: GameCardSlider
};

export const Exemple = (args: GameCardSliderProps) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
);

Exemple.args = {
  items: gamesMock
};
