import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating }) {
  return <span className="rating">{`IMDb: ${rating}`}</span>;
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default Rating;
