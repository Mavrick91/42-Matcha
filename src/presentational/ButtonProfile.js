import React, { Component } from 'react';

import injectSheet from 'react-jss';

class ButtonProfile extends Component {
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

ButtonProfile.defaultProps = {
  text: 'text here',
  onClick: () => console.log('Gimme me function clikc'),
  backgroundColor: 'rgb(253, 211, 127)',
};

export default injectSheet(styles)(ButtonProfile);
