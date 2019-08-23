import { GET_MOVIES } from '../actions/movies'

const initialState = {
  movies: [],
  moviesLoaded: false
}

export default function(state = initialState, { type, data }) {
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: data, moviesLoaded: true }
    default:
      return state
  }
}
