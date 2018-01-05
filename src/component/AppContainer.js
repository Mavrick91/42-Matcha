import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import injectSheet from 'react-jss';
import Header from '../presentational/Header';
import Footer from '../presentational/Footer';

import HomePage from './HomePage';

class AppContainer extends Component {
  render() {
    const { location: { pathname }, history } = this.props;

    return (
      <div>
        <Header pathname={pathname} history={history} />
        <Route path="/" component={HomePage} />
        <Footer />
      </div>
    );
  }
}

const styles = {
  '@global': {
    body: {
      margin: '0'
    }
  }
};

export default injectSheet(styles)(AppContainer);
