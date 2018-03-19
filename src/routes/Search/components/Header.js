import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Header.scss'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'header'}>

        <div className={'viewApplicationsButton'} onClick={() => {browserHistory.push('/applications')}}>
          View Applications
        </div>

        <div className={'viewAccountButton'} onClick={() => {browserHistory.push('/account')}}>
          My Account
        </div>

      </div>
    )
  }
}

export default Header
