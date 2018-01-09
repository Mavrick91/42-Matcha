import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class StarRanking extends Component {
  render() {
    const { value } = this.props;

    return (
      <StarRatingComponent name="starRanking" value={value} editing={false} />
    );
  }
}

StarRanking.defaultProps = {
  value: 0,
};
export default StarRanking;
