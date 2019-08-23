import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from '../actions/movies'

const initialState = {
  movies: [],
  moviesLoaded: false,
  movie: {},
  movieLoaded: false
}

export default function(state = initialState, { type, data }) {
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: data, moviesLoaded: true }
    case GET_MOVIE:
      return { ...state, movie: data, movieLoaded: true }
    case RESET_MOVIE:
      return { ...state, movie: {}, movieLoaded: false }
    default:
      return state
  }
}
