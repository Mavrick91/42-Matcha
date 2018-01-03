import React from 'react';

import { storiesOf } from '@storybook/react';
import ButtonGradient from '../presentational/ButtonGradient';
import Footer from '../presentational/Footer';
import ButtonNormal from '../presentational/ButtonNormal';
import StickerNotification from '../presentational/StickerNotification';
import Header from '../presentational/Header';

const handleClick = () => {
  console.log('functionOnClick');
};

storiesOf('Button', module).add('Register', () => {
  return <ButtonGradient text="REGISTER" onClick={handleClick} />;
});

storiesOf('Footer', module).add('footer', () => {
  return (
    <Footer text="Copyright © 2018 Matcha.com - All Rights Reserved. Made by Ornella Robinson & Mavrick Duchamp" />
  );
});

storiesOf('ButtonNormal', module).add('buttonNormal', () => {
  return <ButtonNormal text="CONNEXION" onClick={handleClick} />;
});

storiesOf('StickerNotification', module).add('stickerNotification', () => {
  return <StickerNotification text="13"/>;
});
storiesOf('Header', module).add('header', () => {
  return <Header />;
});
