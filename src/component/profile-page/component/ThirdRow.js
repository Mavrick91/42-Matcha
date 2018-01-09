import React, { Component } from 'react';
import injectSheet from 'react-jss';

import StarRanking from '../../../presentational/StarRanking';
import ButtonProfile from '../../../presentational/ButtonProfile';
import favoriteIcon from '../../../images/photos_selected/Profile-Page/favorite-icon.png';

class ThirdRow extends Component {
  handleBlock = () => {};

  handleReport = () => {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.containerLeft}>
          <div className={classes.containerRanking}>
            <div className={classes.rankingText}>RANKINGS</div>
            <div className={classes.ranking}>
              <span>4.5</span> <StarRanking value={4} />
            </div>
          </div>
          <ButtonProfile text="CHAT" />
          <button>
            <div
              className={classes.containerFavoriteIcon}
              style={{ backgroundImage: `url(${favoriteIcon})` }}
            />
          </button>
        </div>
        <div className={classes.containerRight}>
          <ButtonProfile
            text="BLOCK"
            onClick={this.handleBlock}
            backgroundColor="rgb(94, 94, 94)"
          />
          <ButtonProfile
            text="REPORT"
            onClick={this.handleReport}
            backgroundColor="rgb(192, 192, 192)"
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  containerLeft: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: '15px',
  },
  containerRight: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: '15px',
    '& :nth-child(2)': {
      marginLeft: '15px',
    },
  },
  containerFavoriteIcon: {
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    height: '30px',
    width: '30px',
    marginLeft: '15px',
  },
  containerRanking: {
    marginRight: '15px',
  },
  ranking: {
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      marginRight: '8px',
      fontWeight: 'bold',
      fontSize: '30px',
    },
  },
  rankingText: {
    fontWeight: 'lighter',
    color: 'rgb(104, 104, 104)',
  },
};

export default injectSheet(styles)(ThirdRow);
