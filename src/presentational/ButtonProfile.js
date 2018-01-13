/* @flow */

import React, { Component } from 'react';

import injectSheet from 'react-jss';

type Props = {
  classes: Object,
  text: string,
  onClick: Function,
  backgroundColor: string,
};

class ButtonProfile extends Component<Props> {
  static defaultProps = {
    text: 'text here',
    onClick: () => console.log('Gimme me function clikc'),
    backgroundColor: 'rgb(253, 211, 127)',
  };

  render() {
    const { classes, onClick, text, backgroundColor } = this.props;

    return (
      <div>
        <button
          onClick={onClick}
          className={classes.button}
          style={{
            backgroundColor,
          }}
        >
          {text}
        </button>
      </div>
    );
  }
}

const styles = {
  button: {
    padding: '10px 25px',
    borderRadius: '10px',
    fontFamily: 'sans-serif',
    background: 'rgb(253, 211, 127)',
    color: 'white',
    border: 'none',
  },
};

export default injectSheet(styles)(ButtonProfile);
