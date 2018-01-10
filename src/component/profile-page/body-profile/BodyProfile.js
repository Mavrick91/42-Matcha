import React, { Component } from 'react';
import injectSheet from 'react-jss';

import GenderAside from './component/GenderAside';
import Biographie from './component/Biographie';
import TagAndPicture from './component/TagAndPicture';
import GoogleMap from './component/GoogleMap';

class bodyProfile extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.containerTopside}>
          <GenderAside />
          <Biographie />
          <TagAndPicture />
        </div>
        <div className={classes.containerGoogleMap}>
          <GoogleMap />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    paddingLeft: '100px',
    display: 'flex',
    flexDirection: 'column',
  },
  containerTopside: {
    display: 'flex',
  },
};

export default injectSheet(styles)(bodyProfile);
