import React, { Component } from 'react';

import injectSheet from 'react-jss';

class SecondRow extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.username}>
        <span>OrnellaRobs08</span>
      </div>
    );
  }
}

const styles = {
  username: {
    fontWeight: 'bold',
    color: 'lightslategray',
    marginTop: '15px',
  },
};

export default injectSheet(styles)(SecondRow);
