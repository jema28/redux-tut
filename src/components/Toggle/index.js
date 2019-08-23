import React from 'react'
import { connect } from 'react-redux'

const Toggle = ({ messageVisibility }) => (
  <div>
    {messageVisibility && (
      <p>You will be seeing this if redux action is toggled</p>
    )}
    <button>Toggle me</button>
  </div>
)

const mapStateToProps = ({ message }) => ({
  messageVisibility: message.messageVisibility
})

export default connect(mapStateToProps)(Toggle)
