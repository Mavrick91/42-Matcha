import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ButtonGradient from '../presentational/ButtonGradient';
import Footer from '../presentational/Footer';

const handleClick = () => {
  console.log('functionOnClick');
};

storiesOf('Button', module).add('Register', () => {
  return <ButtonGradient text="REGISTER" onClick={handleClick} />;
});

storiesOf('Footer', module).add('footer', () => {
  return <Footer text="Copyright © 2018 Matcha.com - All Rights Reserved. Made by Ornella Robinson & Mavrick Duchamp"/>;
});