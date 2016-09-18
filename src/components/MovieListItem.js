import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Media } from 'react-bootstrap';

const MovieListItem = ({movie}) => (
  <Media>
    <Link to={`/movie/${movie.id}`}>
      <Media.Left>
        <img width={64}
          src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </Media.Left>
      <Media.Body>
        <Media.Heading>{movie.title}</Media.Heading>
        <p>{movie.overview}</p>
      </Media.Body>
    </Link>
  </Media>
)

MovieListItem.propTypes = {
  movie: PropTypes.object,
}


export default MovieListItem;
