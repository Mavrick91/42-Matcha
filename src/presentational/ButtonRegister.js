/* @flow */

import React, { Component } from 'react';
import injectSheet from 'react-jss';

type Props = {
  classes: Object,
  text: string,
  onClick: Function,
};

class ButtonRegister extends Component<Props> {
  render() {
    const { classes, text, onClick } = this.props;

    return (
      <button onClick={onClick} className={classes.buttonClass}>
        <div className={classes.container}>{text}</div>
      </button>
    );
  }
}

const styles = {
  container: {
    display: 'inline-flex',
    background: '#F9526A',
    padding: '17px 50px',
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

export default injectSheet(styles)(ButtonRegister);
