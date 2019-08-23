/* eslint react/no-did-mount-set-state: 0 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MoviesList from '../MovieList'
import MovieDetail from '../MovieDetail'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MoviesList} />
      <Route path="/:id" component={MovieDetail} />
    </Switch>
  </Router>
)

export default App
