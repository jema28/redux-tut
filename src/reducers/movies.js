import { GET_MOVIES } from '../actions/movies'

const initialState = {
  movies: []
}

export default function(state = initialState, { type, data }) {
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: data }
    default:
      return state
  }
}
