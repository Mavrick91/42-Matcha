/* @flow */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';

const API_GOOGLE_MAP = 'AIzaSyDfMEOIYCjr5sC1IBCg6RNc5E7Jg1Iw9yM';

type Props = {
  locationUser: string,
  classes: Object,
};

type State = {
  lat: number,
  lng: number,
};

class GoogleMap extends Component<Props, State> {
  static defaultProps = {
    locationUser: 'Santiago de Surco, Perù',
  };

  state = {
    lat: 0,
    lng: 0,
  };

  async componentDidMount() {
    const { locationUser } = this.props;

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${locationUser
        .replace(/\s+/g, '+')
        .replace(/,/g, '')}&key=${API_GOOGLE_MAP}`,
    );
    const { lat, lng } = response.data.results['0'].geometry.location;

    this.setState({ lat, lng });

    const script = document.createElement('script');
    const s = document.createElement('script');
    const body = document.body;

    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_GOOGLE_MAP}&callback=initMap`;
    script.async = true;

    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = `function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });;\n}`;

    if (body) {
      body.appendChild(s);
      body.appendChild(script);
    }
  }

  render() {
    const { classes } = this.props;
    const { lat, lng } = this.state;

    if (lat === 0 && lng === 0) return <div>Loading...</div>;

    return (
      <div className={classes.containerMap}>
        <div id="map" className={classes.wrapperMap}>
          test
        </div>
      </div>
    );
  }
}

const styles = {
  containerMap: {},
  wrapperMap: {
    height: '500px',
    marginBottom: '30px',
  },
};

export default injectSheet(styles)(GoogleMap);
