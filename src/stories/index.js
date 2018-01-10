import React from 'react';

import { storiesOf } from '@storybook/react';

import lookingGlass from '../images/photos_selected/Profile-Page/looking-glass-heart.png';
import ButtonGradient from '../presentational/ButtonGradient';
import Footer from '../presentational/Footer';
import ButtonNormal from '../presentational/ButtonNormal';
import StickerNotification from '../presentational/StickerNotification';
import Header from '../presentational/Header';
import DropdownMenu from '../presentational/DropdownMenu';
import StarRanking from '../presentational/StarRanking';
import ButtonProfile from '../presentational/ButtonProfile';
import ButtonRegister from '../presentational/ButtonRegister';
import BoxGender from '../presentational/BoxGender';

const handleClick = () => {
  console.log('functionOnClick');
};

storiesOf('Footer', module).add('footer', () => {
  return (
    <Footer text="Copyright © 2018 Matcha.com - All Rights Reserved. Made by Ornella Robinson & Mavrick Duchamp" />
  );
});

storiesOf('Button', module)
  .add('Normal', () => {
    return <ButtonNormal text="CONNEXION" onClick={handleClick} />;
  })
  .add('Profile', () => {
    return (
      <div>
        <ButtonProfile text="CHAT" onClick={handleClick} />
        <br />
        <ButtonProfile
          text="REPORT"
          onClick={handleClick}
          backgroundColor="rgb(192, 192, 192)"
        />
        <br />
        <ButtonProfile
          text="BLOCK"
          onClick={handleClick}
          backgroundColor="rgb(94, 94, 94)"
        />
        <br />
      </div>
    );
  })
  .add('Register-Form1', () => {
    return (
      <ButtonRegister text="CONTINUE REGISTRATION" onClick={handleClick} />
    );
  })
  .add('Register-Form2', () => {
    return <ButtonGradient text="REGISTER" onClick={handleClick} />;
  });

storiesOf('StickerNotification', module).add('stickerNotification', () => {
  return <StickerNotification text="13" />;
});

storiesOf('Header', module).add('header', () => {
  return <Header />;
});

storiesOf('DropdownMenu', module).add('dropdowmMenu', () => {
  return <DropdownMenu />;
});

storiesOf('Star', module).add('ranking', () => {
  return (
    <div>
      <StarRanking />
      <br />
      <StarRanking value={1} />
      <br />
      <StarRanking value={4} />
    </div>
  );
});

storiesOf('Box', module).add('gender', () => {
  return (
    <div>
      <BoxGender />
      <br />
      <BoxGender
        gender="male"
        title={
          <span>
            <img src={lookingGlass} alt="" />
            SEEKING
          </span>
        }
      />
    </div>
  );
});
