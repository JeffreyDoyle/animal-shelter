import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Applications.scss'
import AllLocations from './AllLocations';
import CityLocations from './CityLocations';
import AllBreedsLocaitons from './AllBreedsLocations';
import ReseedDB from './ReseedDB';

class AdvancedList extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'ApplicationsListWrapper'}>

        <AllLocations action={this.props.getLocationsWithAllAnimals}/>

        <CityLocations action={this.props.getLocationsWithCity} />

        <AllBreedsLocaitons action={this.props.getLocationsWithAllBreeds} />

        <ReseedDB action={this.props.reseedDB} />

      </div>
    )
  }
}

export default AdvancedList
