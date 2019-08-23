import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleMessage } from '../../actions/toggle'
import { getMovies } from '../../actions/movies'

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {messageVisibility && (
      <p>You will be seeing this if redux action is toggled</p>
    )}
    <button onClick={toggleMessage}>Toggle me</button>
    <button onClick={getMovies}>Get Movies</button>
  </div>
)

const mapStateToProps = ({ toggle }) => ({
  messageVisibility: toggle.messageVisibility
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage,
      getMovies
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle)
