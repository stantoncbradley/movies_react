import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import api from '../api'

const styles = {
  pageTitle: {
    textAlign: 'center',
  },
  img: {
    display: 'block',
    margin: 'auto',
    width: '100%',
  },
  grid: {
    width: 'auto',
  }
}

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: {},
    }
  }

  componentDidMount() {
    api(`movie/${this.props.params['id']}`)
    .then(data => this.setState({
      movieData: data,
    }))
    .catch(error => console.log('Error! ' + error) )
  }

  render() {
    if (this.state.movieData === {}) {
      return <div>No data</div>
    }
    return (
      <Grid style={styles.grid}>
        <Row>
          <h4 style={styles.pageTitle}>{this.state.movieData.title}</h4>
        </Row>
        <Row>
          <Col md={3} style={{marginRight: '-15px'}}>
            <img
              style={styles.img}
              src={`http://image.tmdb.org/t/p/original${this.state.movieData.poster_path}`}
              alt={this.state.movieData.title}
            />
          </Col>
          <Col md={9} style={{marginRight: '-15px'}}>
            <div>{`Released: ${this.state.movieData.release_date}`}</div>
            <div>{`Runtime: ${this.state.movieData.runtime} min`}</div>
            <div>{`Rating: ${this.state.movieData.vote_average}/10`}</div>
            <br />
            <div>{this.state.movieData.overview}</div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Movie;
