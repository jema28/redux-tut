import { combineReducers } from 'redux'

import movies from './movies'
import toggle from './toggle'

const rootReducer = combineReducers({
  toggle,
  movies
})

export default rootReducer
