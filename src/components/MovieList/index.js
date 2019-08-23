/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies } from '../../actions/movies'
import Movie from '../Movie'
import { MovieGrid } from './index.style'

class MoviesList extends Component {
  componentDidMount() {
    const { getMovies, isLoaded, moviesLoadedAt } = this.props
    const oneHour = 60 * 60 * 1000
    if (!isLoaded || new Date() - new Date(moviesLoadedAt) > oneHour)
      getMovies()
  }

  render() {
    const { movies } = this.props
    return (
      <MovieGrid>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    )
  }
}

const mapStateToProps = ({
  movies: { movies, moviesLoaded, moviesLoadedAt }
}) => ({
  movies,
  isLoaded: moviesLoaded,
  moviesLoadedAt
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList)
