import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import matchaLogo from '../images/photos_selected/Header/matcha.jpg';
import VisitLogo from '../images/photos_selected/Header/people-notifications.png';
import ChatLogo from '../images/photos_selected/Header/talk-icon.png';
import LikeLogo from '../images/photos_selected/Header/heart.png';
import DefaultPhoto from '../images/photos_selected/Profile-Page/woman-figure.jpg';
import ButtonNormal from './ButtonNormal';
import StickerNotification from './StickerNotification';

class Header extends Component {
  render() {
    const { classes , pathName, numberNotifChat, numberNotifLike, numberNotifVisit } = this.props;
    console.log(this.props.numberNotifChat);
    let text;
    const icons = [
      <div className={classes.stickerNotification}>
        <StickerNotification text={numberNotifChat}/>
        <Link to="/Chat">
          <img src={ChatLogo} alt=""/>
        </Link>
      </div>,
      <div className={classes.stickerNotification}>
        <StickerNotification text={numberNotifLike}/>
          <img src={LikeLogo} alt=""/>
      </div>,
      <div className={classes.stickerNotification}>
        <StickerNotification text={numberNotifVisit}/>            
          <img src={VisitLogo} alt=""/>
      </div>,
      <img className={classes.profilePhoto} src={DefaultPhoto} alt=""/>
    ];
    let showIcons = true;

    switch (pathName) {
      case '/login':
        text = "REGISTER"
        break;
      case '/':
      case '/register':
        text = "LOGIN"
        break;
      case '/profile':
      case '/profile/modify':
      case '/research':
      case '/deleteAccount':
      case '/chat':
        text = "LOGOUT";
        showIcons = true;
        break;
      default:
        text = "TEXT HERE"
    }

    return (
      <div className={classes.container}>
        <img className={classes.matchaLogo} src={matchaLogo} alt="" />      
        <div className={classes.notifications}>
          {
            showIcons && icons
          }
          <ButtonNormal text={text}/>
        </div>
      </div>
    );
  }
}
Header.defaultProps = {
  numberNotifChat: '1',
  numberNotifLike: '0',
  numberNotifVisit: '14',
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #D8D8D8',
    height: '100px',
  },
  matchaLogo: {
    height: '70px',
    margin: 'auto',
  },
  stickerNotification: {
    position: 'relative',
  },
  notifications: {
    display: 'flex',
    alignItems: 'center',
    '& > div > img, & > img': {
      marginRight: '15px',
      height: '40px'
    }
  },
  profilePhoto: {
    border: '1px solid black',
    borderRadius: '1000px',
  }
};

export default injectSheet(styles)(Header);