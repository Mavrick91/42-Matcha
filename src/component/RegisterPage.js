/* @flow */

import React, { Component } from 'react';
import injectSheet from 'react-jss';

import coupleSand from '../images/photos_selected/Register-Page/couple-hug-beach.jpg';
import certification from '../images/photos_selected/Register-Page/certified.png';
import geometricHeart from '../images/photos_selected/Register-Page/geometric-heart.jpg';
import InfoRegister from './InfoRegister';
import LocationRegister from './LocationRegister';

type Props = {
  classes: Object,
  history: Object,
};

type State = {
  locationForm: boolean,
};

class RegisterPage extends Component<Props, State> {
  state = {
    locationForm: false,
  };

  render() {
    const { classes, history } = this.props;
    const { locationForm } = this.state;

    const correctForm = locationForm ? (
      <LocationRegister onClick={() => history.push('/login')} />
    ) : (
      <InfoRegister onClick={() => this.setState({ locationForm: true })} />
    );

    return (
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <div className={classes.aside}>
            <div className={classes.asideImg}>
              <img src={geometricHeart} alt="" />
            </div>
            <div className={classes.textImg}>85% FIND LOVE</div>
          </div>
          <div className={classes.aside}>
            <div className={classes.asideImg}>
              <img src={certification} alt="" />
            </div>
            <div className={classes.textImg}>
              THE LEADING ONLINE DATING SITE
            </div>
          </div>
        </div>

        <div className={classes.registerContainer} />
        <div className={classes.darkBox}>
          <form className={classes.registerFormWrapper}>
            <div className={classes.registerTitle}>
              More ways to meet people who worth it !
            </div>
            {correctForm}
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  aside: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '130px',
  },
  asideImg: {
    width: '100px',
    '& > img': {
      width: '100%',
      height: '100%',
    },
  },
  container: {
    display: 'flex',
    position: 'relative',
    height: 'calc(100vh - 161px)',
    overflow: 'hidden',
  },
  darkBox: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '490px',
    height: '490px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  eachRadioWrapper: {
    color: 'white',
    marginRight: '10px',
    marginBottom: '10px',
    fontFamily: 'MS Serif, New York, sans-serif',
    '& > input': {
      marginRight: '15px',
    },
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '20%',
  },
  inputRadioWrapper: {
    display: 'flex',
  },
  inputWrapper: {
    display: 'flex',
    '& > input': {
      width: '130px',
      border: 'none',
      height: '27px',
      padding: '10px 35px',
      outline: 'none',
      fontSize: '12px',
      textAlign: 'center',
      margin: '15px 20px',
    },
  },
  registerContainer: {
    backgroundImage: `url(${coupleSand})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '80%',
  },
  registerFormWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  registerTitle: {
    width: '350px',
    color: 'white',
    fontSize: '28px',
    textAlign: 'center',
    margin: '30px 0',
    fontFamily: 'Arial, Sans-Serif',
    fontWeight: 'Bold',
  },
  registerButtonSubmit: {
    // margin: 'auto',
    background: '#F9526A',
    color: 'white',
    marginTop: '15px',
    padding: '17px 50px',
    fontSize: '14px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  textImg: {
    fontFamily: 'MS Serif, New York, sans-serif',
    fontSize: '12px',
    textAlign: 'center',
  },
};

export default injectSheet(styles)(RegisterPage);
