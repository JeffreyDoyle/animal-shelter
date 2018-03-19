import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Applications.scss'
import Header from './Header';
import ApplicationsList from '../containers/ApplicationsList';

class Applications extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'ApplicationsWrapper'}>
        <Header />
        <ApplicationsList />
      </div>
    )
  }
}

export default Applications
