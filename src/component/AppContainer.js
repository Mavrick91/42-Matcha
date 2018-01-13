/* @flow */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import injectSheet from 'react-jss';
import Header from '../presentational/Header';
import Footer from '../presentational/Footer';

import LoginPage from './LoginPage';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import ProfilePage from './profile-page/ProfilePage';

type Props = {
  location: Object,
  history: Object,
};

class AppContainer extends Component<Props> {
  render() {
    const { location: { pathname }, history } = this.props;

    return (
      <div>
        <Header pathname={pathname} history={history} />
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Footer />
      </div>
    );
  }
}

const styles = {
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    'html, body': {
      margin: '0',
      height: '100%',
    },
  },
};

export default injectSheet(styles)(AppContainer);
