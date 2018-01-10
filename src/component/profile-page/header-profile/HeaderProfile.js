/* @flow */

import React, { Component } from 'react';
import injectSheet from 'react-jss';

import FirstRow from './component/FirstRow';
import SecondRow from './component/SecondRow';
import ThirdRow from './component/ThirdRow';

import coupleSea from '../../../images/photos_selected/Profile-Page/couple-sea.jpg';

type Props = {
  classes: Object,
  mainPicture: any,
};

class HeaderProfile extends Component<Props> {
  render() {
    const { classes, mainPicture = null } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.backgroundImage} />
        <div className={classes.wrapperInformation}>
          <div className={classes.containerProfileImage}>
            <div
              className={classes.profileImage}
              style={{
                backgroundImage: `url('${
                  mainPicture == null ? coupleSea : mainPicture
                }')`,
              }}
            />
            <span>ABOUT</span>
          </div>
          <div className={classes.containerRight}>
            <div className={classes.wrapperNamePopularityUser}>
              <FirstRow />
              <SecondRow />
              <ThirdRow />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  backgroundImage: {
    backgroundImage: `url(${coupleSea})`,
    backgroundPosition: 'center',
    backgroundSize: '100%',
    height: '300px',
  },
  container: {
    marginBottom: '50px',
    width: '100%',
  },
  containerRight: {
    width: '100%',
    marginLeft: '60px',
    marginBottom: '20px',
    paddingBottom: '60px',
    borderBottom: '1px solid rgb(200, 200, 200)',
  },
  containerProfileImage: {
    height: '340px',
    marginBottom: '20px',
    borderBottom: '1px solid rgb(200, 200, 200)',
    position: 'relative',
    '& > span': {
      position: 'absolute',
      bottom: '0',
      left: '0',
      marginBottom: '-9px',
      background: 'white',
      paddingRight: '20px',
      color: 'rgb(171, 171, 171)',
      fontWeight: 'lighter',
    },
  },
  profileImage: {
    width: '275px',
    height: '275px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'inline-block',
    boxShadow: '0px 3px 15px 2px lightgrey',
  },
  wrapperInformation: {
    display: 'flex',
    alignItems: 'flex-end',
    height: '300px',
    width: '100%',
    marginTop: '-50px',
    paddingLeft: '100px',
    fontFamily: 'sans-serif',
  },
  wrapperNamePopularityUser: {
    marginRight: '25px',
  },
};

export default injectSheet(styles)(HeaderProfile);
