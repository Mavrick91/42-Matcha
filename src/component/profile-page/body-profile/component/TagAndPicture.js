import React, { Component } from 'react';
import injectSheet from 'react-jss';

import ContainerBoxProfile from '../../../../presentational/ContainerBoxProfile';
import MultiplePhotoProfile from '../../../../presentational/MultiplePhotoProfile';

class TagAndPicture extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.containerTagPicture}>
        <ContainerBoxProfile title="INTEREST" width="425px" />
        <MultiplePhotoProfile />
      </div>
    );
  }
}

const styles = {
  containerTagPicture: {
    width: '100%',
    paddingLeft: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
};

export default injectSheet(styles)(TagAndPicture);
