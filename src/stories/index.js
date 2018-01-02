import React from 'react';

import { storiesOf } from '@storybook/react';
import ButtonGradient from '../presentational/ButtonGradient';

const handleClick = () => {
  console.log('functionOnClick');
};

storiesOf('Button', module).add('Register', () => {
  return <ButtonGradient text="REGISTER" onClick={handleClick} />;
});
