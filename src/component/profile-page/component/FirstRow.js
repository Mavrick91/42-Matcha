/* @flow */

import React, { Component } from 'react';
import injectSheet from 'react-jss';

import femaleIcon from '../../../images/photos_selected/Profile-Page/female-icon.png';
import iconLocation from '../../../images/photos_selected/Profile-Page/localisation-icon.png';

type Props = {
  classes: Object,
};

class FirstRow extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.flexNameLocation}>
        <div className={classes.nameGenderOnline}>
          <span>Ornella Robinson</span>
          <span>
            <img src={femaleIcon} alt="" />
          </span>
          <span>20 ans</span>
          <span>Offline since 15-12-2017 at 4:06pm</span>
        </div>
        <div className={classes.location}>
          <img src={iconLocation} alt="" />
          <span>Santiago de Surco, Perù</span>
        </div>
      </div>
    );
  }
}

const styles = {
  flexNameLocation: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  location: {
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    '& > img': {
      maxWidth: '100%',
      maxHeight: '100%',
      marginRight: '5px',
    },
  },
  nameGenderOnline: {
    display: 'flex',
    alignItems: 'center',
    '& :nth-child(1)': {
      fontWeight: 'bold',
    },
    '& :nth-child(2)': {
      marginLeft: '10px',
      display: 'inline-block',
      width: '20px',
      height: '20px',
      '& > img': {
        maxWidth: '100%',
        maxHeight: '100%',
        margin: '0',
      },
    },
    '& :nth-child(3)': {
      marginLeft: '10px',
      fontWeight: 'bold',
      color: 'crimson',
    },
    '& :nth-child(4)': {
      marginLeft: '10px',
      fontWeight: 'lighter',
    },
  },
};

export default injectSheet(styles)(FirstRow);
