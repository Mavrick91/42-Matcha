/* @flow */

import React, { Component } from 'react';
import injectSheet from 'react-jss';

type Props = {
  classes: Object,
  type: string,
  disabled?: boolean,
  value?: string,
  style?: Object,
  placeholder?: string,
  onChange?: Function
};

class InputForm extends Component<Props> {
  render() {
    const { classes } = this.props;

    return <input className={classes.container} {...this.props} />;
  }
}

const styles = {
  container: {
    width: '165px',
    border: 'none',
    height: '27px',
    padding: '20px 35px',
    outline: 'none',
    fontSize: '12px',
    textAlign: 'center',
    margin: '0 20px'
  }
};

export default injectSheet(styles)(InputForm);
