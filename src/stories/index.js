import React from 'react';

import { storiesOf } from '@storybook/react';

import maleIcon from '../images/photos_selected/Profile-Page/male-icon.png';
import lookingGlass from '../images/photos_selected/Profile-Page/looking-glass-heart.png';

import ButtonGradient from '../presentational/ButtonGradient';
import Footer from '../presentational/Footer';
import ButtonNormal from '../presentational/ButtonNormal';
import StickerNotification from '../presentational/StickerNotification';
import Header from '../presentational/Header';
import DropdownMenu from '../presentational/DropdownMenu';
import StarRanking from '../presentational/StarRanking';
import ButtonProfile from '../presentational/ButtonProfile';
import ButtonForm from '../presentational/ButtonForm';
import ContainerBoxProfile from '../presentational/ContainerBoxProfile';
import InfoRegister from '../component/InfoRegister';
import LocationRegister from '../component/LocationRegister';
import ErrorField from '../presentational/ErrorField';

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
  .add('Register form', () => {
    return <ButtonForm text="CONTINUE REGISTRATION" onClick={handleClick} />;
  })
  .add('Register gradient', () => {
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
  const style = {
    backgroundImage: `url(${maleIcon})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100px',
  };

  return (
    <div>
      <ContainerBoxProfile title="I AM">
        <div style={style} />
      </ContainerBoxProfile>
      <br />
      <ContainerBoxProfile
        title={
          <span>
            <img
              src={lookingGlass}
              alt=""
              style={{
                width: '20px',
                marginRight: '5px',
                verticalAlign: 'bottom',
              }}
            />
            SEEKING
          </span>
        }
      >
        <div style={style} />
      </ContainerBoxProfile>
      <br />
      <ContainerBoxProfile title="BIO" width="600px">
        <div>
          je m'apelle Ornella, j'ai 20 ans Je suis étudiante et je suis a la
          recherche d'un homme ayant la vingtaine qui saura me faire rire au
          quotidien. Je recherche un homme qui a confiance en lui, marrant,
          intelligent, qui aime voyager et qui apprecie la compagnie des chiens
        </div>
      </ContainerBoxProfile>
    </div>
  );
});

storiesOf('InfoRegister', module)
  .add('InfoRegister', () => {
    return <InfoRegister />;
  })
  .add('locationRegister', () => {
    return <LocationRegister />;
  });

storiesOf('Error', module).add('Field', () => {
  return <ErrorField text="Empty username" />;
});
