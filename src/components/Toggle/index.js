import React from 'react'
import { connect } from 'react-redux'

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility && (
      <p>You will be seeing this if redux action is toggled</p>
    )}
    <button onClick={toggleMessage}>Toggle me</button>
  </div>
)

const mapStateToProps = ({ message }) => ({
  messageVisibility: message.messageVisibility
})

const mapDispatchToProps = dispatch => ({
  toggleMessage: () => dispatch({ type: 'TOGGLE_MESSAGE' })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle)
