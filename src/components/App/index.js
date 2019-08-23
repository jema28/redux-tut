/* eslint react/no-did-mount-set-state: 0 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../../reducers/rootReducer'
import MoviesList from '../MovieList'
import MovieDetail from '../MovieDetail'
import Toggle from '../Toggle'

const middleware = [logger, thunk]

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
)

const App = () => (
  <Provider store={store}>
    <Router>
      <Toggle />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </Router>
  </Provider>
)

export default App
