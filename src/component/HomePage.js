import React, { Component } from 'react';
import injectSheet from 'react-jss';
import ButtonGradient from '../presentational/ButtonGradient';

import couple_img from '../images/photos_selected/Home-Page/photo-index-1.jpeg';
import match_img from '../images/photos_selected/Home-Page/match-msg.jpg';

class HomePage extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <div className={classes.textLeftContainer}>
            “The best online dating site to find love!” - The New York Times
          </div>
          <img src={couple_img} alt="" />
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.imgRightContainer}>
            <img src={match_img} alt="" />
          </div>
          <div className={classes.registerButtonWrapper}>
            <ButtonGradient
              text="REGISTER ONLINE"
              onClick={() => history.push('/register')}
            />
          </div>
          <div className={classes.msgRegister}>
            By subscribing to our website you are agreeing to the Terms and
            Conditions.
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex'
  },
  leftContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%',
    '& > img': {
      width: '100%'
    }
  },
  textLeftContainer: {
    fontSize: '30px',
    padding: '20px 0',
    textAlign: 'center'
  },
  rightContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    '& > ButtonGradient': {
      width: '100px'
    }
  },
  imgRightContainer: {
    height: '400px',
    paddingTop: '150px',
    '& > img': {
      height: '100%'
    }
  },
  registerButtonWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  msgRegister: {
    display: 'flex',
    width: '266px',
    fontSize: '12px',
    color: 'lightGrey',
    fontFamily: 'MS Serif, New York, sans-serif',
    paddingTop: '50px'
  }
};

export default injectSheet(styles)(HomePage);
