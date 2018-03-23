import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Applications.scss'
import AllLocations from './AllLocations';
import CityLocations from './CityLocations';
import AllBreedsLocaitons from './AllBreedsLocations';

class AdvancedList extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'ApplicationsListWrapper'}>

        <AllLocations />

        <CityLocations />

        <AllBreedsLocaitons />

      </div>
    )
  }
}

export default AdvancedList
