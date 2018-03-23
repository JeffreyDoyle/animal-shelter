import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/ApplicationsList.scss'
import ApplicationCard from './ApplicationCard';
import Header from './Header';

class Applications extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'ApplicationsListWrapper'}>

        <Header />

        <ApplicationCard />

        <ApplicationCard />

        <ApplicationCard />

      </div>
    )
  }
}

export default Applications
