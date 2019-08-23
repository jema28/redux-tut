/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react'
import Overdrive from 'react-overdrive'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovie, resetMovie } from '../../actions/movies'
import { MovieWrapper, MovieInfo } from './index.style'
import { Poster } from '../Movie/index.style'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

class MovieDetail extends Component {
  componentDidMount() {
    const {
      getMovie,
      isLoaded,
      match: {
        params: { id }
      }
    } = this.props
    if (!isLoaded) getMovie(id)
  }
  componentWillUnmount() {
    const { resetMovie } = this.props
    resetMovie()
  }

  render() {
    const {
      movie: { id, title, release_date, overview, backdrop_path, poster_path }
    } = this.props
    if (!id) return null
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${id}`}>
            <Poster src={`${POSTER_PATH}${poster_path}`} alt={title} />
          </Overdrive>
          <div>
            <h1>{title}</h1>
            <h3>{release_date}</h3>
            <p>{overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    )
  }
}

const mapStateToProps = ({ movies: { movie, movieLoaded } }) => ({
  movie,
  isLoaded: movieLoaded
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMovie, resetMovie }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail)
