import React from 'react';
import styled from 'styled-components';

import { Slider, SliderProps } from '.';

export default {
  title: 'Slider',
  component: Slider
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const Slide = styled.div`
  background-color: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Horizontal = (args: SliderProps) => (
  <Slider {...args} settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
    <Slide>8</Slide>
  </Slider>
);

export const Vertical = (args: SliderProps) => (
  <Slider {...args} settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
    <Slide>8</Slide>
  </Slider>
);
