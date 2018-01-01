import React, { Component } from 'react';
import injectSheet from 'react-jss';

class ButtonGradient extends Component {
  render() {
    return <div className={this.props.classes.test}>{this.props.text}</div>;
  }
}

const styles = {
  test: {
    border: '1px solid red',
  },
};

export default injectSheet(styles)(ButtonGradient);
//permet de connecter le jsx du component avec le css de styles
