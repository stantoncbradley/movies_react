import React, { PropTypes } from 'react'
import MovieListItem from './MovieListItem'

const Movies = ({moviesData, pageTitle}) => {
  if (moviesData.length === 0) {
    return <div style={{textAlign: 'center'}}>(No results)</div>
  }
  return (
    <div>
      <h4 style={{textAlign: 'center'}}>{pageTitle}</h4>
      {moviesData.map(movie => <MovieListItem movie={movie} key={movie.id} />)}
    </div>
  )
}

Movies.propTypes = {
  moviesData: PropTypes.array,
  pageTitle: PropTypes.string,
}

export default Movies;
