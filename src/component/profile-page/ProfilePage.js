/* @flow */

import React, { Component } from 'react';
import injectSheet from 'react-jss';

import HeaderProfile from './header-profile/HeaderProfile';
import BodyProfile from './body-profile/BodyProfile';

type Props = {
  classes: Object,
};

class ProfilePage extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.containerProfilePage}>
        <HeaderProfile />
        <BodyProfile />
      </div>
    );
  }
}

const styles = {
  containerProfilePage: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '1500px',
    margin: '0 auto',
  },
};
export default injectSheet(styles)(ProfilePage);
