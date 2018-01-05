import React, { Component } from 'react';
import injectSheet from 'react-jss';

class StickerNotification extends Component {
  render() {
    const { classes, text } = this.props;
    
    if (text == '0')
      return <div></div>
    
    return <div className={classes.container}>
       {text}
    </div>
  }
}

const styles = {
  container: {
    position: 'absolute',
    right: '12px',
    top: '-7px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20px',
    width: '20px',
    backgroundColor: 'red',
    borderRadius: '1000px',
    color: 'white',
    fontFamily: 'MS Serif, New York, sans-serif',
    fontSize: '11px',
  },
};

export default injectSheet(styles)(StickerNotification);