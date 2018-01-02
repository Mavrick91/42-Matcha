import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ButtonGradient from '../presentational/ButtonGradient';
import { Button, Welcome } from '@storybook/react/demo';

const handleClick = () => {
  console.log('functionOnClick');
};

storiesOf('Button', module).add('Register', () => {
  return <ButtonGradient text="REGISTER" onClick={handleClick} />;
});
