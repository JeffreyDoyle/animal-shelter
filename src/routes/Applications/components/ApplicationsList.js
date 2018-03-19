import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Applications.scss'
import ApplicationCard from './ApplicationCard';

class Applications extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'ApplicationsListWrapper'}>

        <ApplicationCard />

        <ApplicationCard />

        <ApplicationCard />

      </div>
    )
  }
}

export default Applications
