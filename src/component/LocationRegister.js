// @flow

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';

import ButtonForm from '../presentational/ButtonForm';
import InputForm from '../presentational/InputForm';

type Props = {
  classes: Object,
  onClick: Function,
  dispatch: Function,
};

type State = {
  disabled: boolean,
  value: string,
};

const API_KEY = 'AIzaSyDfMEOIYCjr5sC1IBCg6RNc5E7Jg1Iw9yM';

class LocationRegister extends Component<Props, State> {
  state = {
    disabled: true,
    value: '',
  };

  locationAccepted(location) {
    if (location.data.status === 'OK') {
      this.setState({
        value: location.data.results[2].formatted_address,
        disabled: false,
      });
    }
  }

  async locationDenied(getLocation) {
    const { latitude, longitude } = getLocation.data.location;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`,
    );

    this.locationAccepted(response);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const { latitude, longitude } = position.coords;
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`,
          );

          this.locationAccepted(response);
        },
        async error => {
          const response = await axios.post(
            `https://www.googleapis.com/geolocation/v1/geolocate?key=${API_KEY}`,
          );

          this.locationDenied(response);
        },
      );
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
  }

  render() {
    const { classes, onClick } = this.props;
    const { disabled, value } = this.state;
    const backgroundColor = disabled ? 'lightGray' : 'white';

    return (
      <div className={classes.container}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className={classes.inputLocation}>
            <InputForm
              type="text"
              disabled={disabled}
              style={{
                backgroundColor,
                width: '300px',
              }}
              value={value}
            />
          </div>
          <ButtonForm type="submit" text="REGISTER" />
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '450px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: '30px',
    marginBottom: '15px',
  },
  inputLocation: {
    display: 'flex',
    marginBottom: '30px',
  },
};

export default injectSheet(styles)(LocationRegister);
