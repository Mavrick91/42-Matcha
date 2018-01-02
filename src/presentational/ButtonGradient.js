import React, { Component } from 'react';
import injectSheet from 'react-jss';

class ButtonGradient extends Component {
  render() {
    const { classes, text, onClick } = this.props;

    return (
      <div className={classes.container}>
        <button onClick={onClick} className={classes.buttonClass}>
          {text}
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '35px',
    padding: '15px 30px',
    background: 'linear-gradient(to right, #FE2E64 , #FE642E)',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  buttonClass: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontFamily: 'MS Serif, New York, sans-serif',
    fontSize: '14px',
    letterSpacing: '0.5px',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
};

export default injectSheet(styles)(ButtonGradient);
