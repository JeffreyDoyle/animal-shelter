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

  componentDidMount() {
    this.props.getAllApplications();
  }

  render () {
    return (
      <div className={'ApplicationsListWrapper'}>

        <Header />

        <div className={'resultsContent'}>
          {
            this.props.applications ? this.props.applications.map((result) => {

                return (
                  <ApplicationCard application={result} />
                )
              })
              :
              null
          }

        </div>

      </div>
    )
  }
}

export default Applications
