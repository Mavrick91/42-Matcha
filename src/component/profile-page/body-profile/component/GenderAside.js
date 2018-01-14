import React, { Component } from 'react';
import injectSheet from 'react-jss';

import lookingGlass from '../../../../images/photos_selected/Profile-Page/looking-glass-heart.png';
import maleIcon from '../../../../images/photos_selected/Profile-Page/male-icon.png';
// import femaleIcon from '../../../../images/photos_selected/Profile-Page/female-icon.png';

import ContainerBoxProfile from '../../../../presentational/ContainerBoxProfile';

class GenderAside extends Component {
  render() {
    const { classes } = this.props;
    const style = {
      backgroundImage: `url(${maleIcon})`,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
    };

    return (
      <div className={classes.containerGender}>
        <ContainerBoxProfile title="I AM" height="150px">
          <div style={style} />
        </ContainerBoxProfile>

        <ContainerBoxProfile
          height="150px"
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
      </div>
    );
  }
}

const styles = {
  container: {
    paddingLeft: '100px',
  },
  containerGender: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
};

export default injectSheet(styles)(GenderAside);
