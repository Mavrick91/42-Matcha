import React, { Component } from 'react';
import Header from ''
class HomePage extends Component {
  render() {
    const pathName = this.props.location.pathname;

    return (
      <div>
        <Header pathName = {pathName}/>
        HomePage
      </div>
    );
  }
}

export default HomePage;
