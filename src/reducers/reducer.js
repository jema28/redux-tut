import { TOGGLE_MESSAGE, GET_MOVIES } from '../actions/actions'

const initialState = {
  messageVisibility: false,
  movies: []
}

export default function(state = initialState, { type, data }) {
  switch (type) {
    case TOGGLE_MESSAGE:
      return { ...state, messageVisibility: !state.messageVisibility }
    case GET_MOVIES:
      return { ...state, movies: data }
    default:
      return state
  }
}
