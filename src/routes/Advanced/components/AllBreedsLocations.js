import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/AllLocations.scss'
import LocationCard from './LocationCard';

class AllBreedsLocations extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'LocationsWithAllAnimalsWrapper'}>

        <div className={'LocationsWithAllAnimalsInner'}>

          <div className={'LocationsWithAllAnimalsButton'}>
            Get locations with all animal Breeds
          </div>
          <div className={'ListOfLocations'}>

            <LocationCard title={"Brian's #1 Animal Shelter"} />
            <LocationCard title={"Bobby Table's super shelter"} />

          </div>
        </div>
      </div>
    )
  }
}

export default AllBreedsLocations
