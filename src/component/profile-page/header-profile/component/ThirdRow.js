/* @flow */

import React, { Component } from 'react';
import injectSheet from 'react-jss';

import StarRanking from '../../../../presentational/StarRanking';
import ButtonProfile from '../../../../presentational/ButtonProfile';
import favoriteIcon from '../../../../images/photos_selected/Profile-Page/favorite-icon.png';
// import favoriteIconActive from '../../../../images/photos_selected/Profile-Page/favorite-icon-activate.png';
import clickToLikeImage from '../../../../images/photos_selected/Profile-Page/click-to-like.png';

type Props = {
  classes: Object,
};

class ThirdRow extends Component<Props> {
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
          <ButtonProfile
            backgroundColor="linear-gradient(to right, #8080ff , #df80ff)"
            hoverBackgroundColor="linear-gradient(to right, #6600ff , #cc33ff)"
            text="CHAT"
            disabled={false}
          />
          <button>
            <div
              className={classes.containerFavoriteIcon}
              style={{
                backgroundImage: `url(${favoriteIcon})`,
              }}
            />
          </button>
        </div>
        <div className={classes.containerRight}>
          <ButtonProfile
            text="BLOCK"
            onClick={this.handleBlock}
            hoverBackgroundColor="rgb(94, 94, 94)"
            backgroundColor="rgb(192, 192, 192)"
          />
          <ButtonProfile
            text="REPORT"
            onClick={this.handleReport}
            backgroundColor="rgb(192, 192, 192)"
            hoverBackgroundColor="rgb(94, 94, 94)"
          />
        </div>
      </div>
    );
  }
}

const styles = {
  clickToLike: {
    backgroundImage: `url(${clickToLikeImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: '-25px',
    left: '30px',
    width: '170px',
    height: '28px',
  },
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
    backgroundRepeat: 'no-repeat',
    height: '40px',
    width: '40px',
    marginLeft: '15px',
    position: 'relative',
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
