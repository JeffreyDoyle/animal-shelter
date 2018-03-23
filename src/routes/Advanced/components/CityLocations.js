import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/CityLocations.scss'
import LocationCard from './LocationCard';

class CityLocations extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'LocationsInCityWrapper'}>

        <div className={'LocationsInCityInner'}>

          <div className={'LocationInputWrapper'}>
            <div className={'LocationInputButton'}>
              Get locations with this city
            </div>

            <input className={'LocationInput'} />

          </div>

          <div className={'ListOfLocations'}>

            <LocationCard title={"Vancouver"} />
            <LocationCard title={"Toronto"} />
            <LocationCard title={"Halifax"} />

          </div>
        </div>
      </div>
    )
  }
}

export default CityLocations
