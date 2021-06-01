import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { unsetAuthdUser } from '../actions/authedUser'

class Logout extends Component {
  componentWillMount () {
    this.props.dispatch(unsetAuthdUser())
  }
  render () {
    return <Redirect to='/' />
  }
}

export default connect()(Logout)
