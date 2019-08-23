/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react'
import Overdrive from 'react-overdrive'
import { MovieWrapper, MovieInfo } from './index.style'
import { Poster } from '../Movie/index.style'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

class MovieDetail extends Component {
  state = {
    movie: {}
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
      )
      const movie = await res.json()
      this.setState({
        movie
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { movie } = this.state
    if (!movie.id) return null
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${movie.id}`}>
            <Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
            />
          </Overdrive>
          <div>
            {this.state.movie.title ? <h1>Hello</h1> : <h1>Hi</h1>}
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    )
  }
}

export default MovieDetail
