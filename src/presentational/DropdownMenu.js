import React, { Component } from 'react';
import injectSheet from 'react-jss';

class DropdownMenu extends Component {
  render() {
    const { classes } = this.props;
    const tmp = [
      {
        avatar: 'http://bearrealty.com/ClientImage/Agent-Full/jok.jpg',
        username: 'Mavrick',
        date: 'Mercredi 10 septembre',
      },
      {
        avatar: 'http://bearrealty.com/ClientImage/Agent-Full/jok.jpg',
        username: 'Mavrick',
        date: 'Mercredi 10 septembre',
      },
      {
        avatar: 'http://bearrealty.com/ClientImage/Agent-Full/jok.jpg',
        username: 'Mavrick',
        date: 'Mercredi 10 septembre',
      },
      {
        avatar: 'http://bearrealty.com/ClientImage/Agent-Full/jok.jpg',
        username: 'Mavrick',
        date: 'Mercredi 10 septembre',
      },
      {
        avatar: 'http://bearrealty.com/ClientImage/Agent-Full/jok.jpg',
        username: 'Mavrick',
        date: 'Mercredi 10 septembre',
      },
      {
        avatar: 'http://bearrealty.com/ClientImage/Agent-Full/jok.jpg',
        username: 'Mavrick',
        date: 'Mercredi 10 septembre',
      },
      {
        avatar: 'http://bearrealty.com/ClientImage/Agent-Full/jok.jpg',
        username: 'Mavrick',
        date: 'Mercredi 10 septembre',
      },
    ];

    return (
      <div className={classes.containerDropdown}>
        {tmp.map(item => (
          <div className={classes.containerItem}>
            <div className={classes.wrapperImage}>
              <img src={item.avatar} alt="" />
            </div>
            <div className={classes.wrapperInfo}>
              <div>{item.username} vous a envoyer un message</div>
              <div>{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  containerDropdown: {
    boxShadow: '0px 0px 3px 1px lightgrey',
    display: 'inline-block',
    maxHeight: '242px',
    overflow: 'scroll',
    position: 'relative',
  },
  containerItem: {
    fontFamily: 'sans-serif',
    width: '300px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '.5px solid lightGray',
    padding: '10px',
  },
  wrapperImage: {
    borderRadius: '100px',
    width: '50px',
    height: '50px',
    overflow: 'hidden',
    marginRight: '10px',
    '& > img': {
      width: '100%',
      height: '100%',
    },
  },
  wrapperInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    '& :nth-child(1)': {
      fontSize: '12px',
    },
    '& :nth-child(2)': {
      fontSize: '10px',
      color: 'darkGray',
    },
  },
};

export default injectSheet(styles)(DropdownMenu);
