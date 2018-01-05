import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import injectSheet from 'react-jss';
import Header from '../presentational/Header';
import Footer from '../presentational/Footer';

import LoginPage from './LoginPage';
import HomePage from './HomePage';

class AppContainer extends Component {
  render() {
    const { location: { pathname }, history } = this.props;

    return (
      <div>
        <Header pathname={pathname} history={history} />
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Footer />
      </div>
    );
  }
}

const styles = {
  '@global': {
    'html, body': {
      margin: '0',
      height: '100%',
    },
  },
};

export default injectSheet(styles)(AppContainer);
