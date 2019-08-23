const initialState = {
  messageVisibility: false
}

export default function(state = initialState, { type }) {
  switch (type) {
    case 'TOGGLE_MESSAGE':
      return state
    default:
      return state
  }
}
