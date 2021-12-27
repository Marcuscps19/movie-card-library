import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard({ movie }) {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <div className="movie_card">
      <div className="movie_card_info">
        <div className="movie_card_title_rating">
          <h4>{title}</h4>
          <Rating rating={ rating } />
        </div>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
      <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
    </div>
  );
}

PropTypes.shape({ root: PropTypes.string.isRequired });

// Proptypes Source: https://www.youtube.com/watch?v=ldhZ2L3XYis

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
