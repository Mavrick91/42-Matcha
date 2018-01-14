import React, { Component } from 'react';
import injectSheet from 'react-jss';

import ContainerBoxProfile from '../../../../presentational/ContainerBoxProfile';

class Biographie extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <ContainerBoxProfile
          title="BIO"
          width="600px"
          height="calc(100% - 30px)"
        >
          <div>
            je m'apelle Ornella, j'ai 20 ans Je suis étudiante et je suis a la
            recherche d'un homme ayant la vingtaine qui saura me faire rire au
            quotidien. Je recherche un homme qui a confiance en lui, marrant,
            intelligent, qui aime voyager et qui apprecie la compagnie des
            chiens
          </div>
        </ContainerBoxProfile>
      </div>
    );
  }
}

const styles = {
  container: {
    marginLeft: '60px',
  },
};

export default injectSheet(styles)(Biographie);
