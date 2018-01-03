import React, { Component } from 'react';
import injectSheet from 'react-jss';

class Footer extends Component {
  render() {
    const { classes, text } = this.props;

    return <div className={classes.container}>{text}</div>;
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(246, 103, 100)',
    height: '60px',
    color: 'white',
    fontFamily: 'MS Serif, New York, sans-serif',
    fontSize: '12px',
  },
};

export default injectSheet(styles)(Footer);
