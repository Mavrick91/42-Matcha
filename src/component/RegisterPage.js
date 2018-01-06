import React, { Component } from 'react';
import injectSheet from 'react-jss';

import coupleSand from '../images/photos_selected/Register-Page/couple-hug-beach.jpg';
import certification from '../images/photos_selected/Register-Page/certified.png';
import geometricHeart from '../images/photos_selected/Register-Page/geometric-heart.jpg';

class RegisterPage extends Component {
  render() {
    const { classes } = this.props;

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
        <div className={classes.registerContainer}>
          <img src={coupleSand} alt="" />
        </div>
        <div className={classes.darkBox}>
          <form
            className={classes.registerFormWrapper}
            onSubmit={this.onSubmitForm}
          >
            <div className={classes.registerTitle}>
              More ways to meet people who worth it !
            </div>
            <div className={classes.inputRadioWrapper}>
              <div className={classes.eachRadioWrapper}>I AM</div>
              <div className={classes.eachRadioWrapper}>
                <input type="radio" name="gender" value="woman" />A WOMAN
              </div>
              <div className={classes.eachRadioWrapper}>
                <input type="radio" name="gender" value="male" />A MAN
              </div>
            </div>
            <div className={classes.inputWrapper}>
              <input
                type="text"
                placeholder="First Name"
                onChange={e => this.setState({ firstname: e.target.value })}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={e => this.setState({ lastname: e.target.value })}
              />
            </div>
            <div className={classes.inputWrapper}>
              <input
                type="text"
                placeholder="Username"
                onChange={e => this.setState({ username: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
            <button className={classes.registerButtonSubmit} onClick="">
              REGISTER
            </button>
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
    width: '80%',
    '& > img': {
      width: '100%',
      height: '100%',
    },
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
    marginBottom: '20px',
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
