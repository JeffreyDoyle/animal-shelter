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
    console.log('all breeds', this.props.data);
    return (
      <div className={'LocationsWithAllAnimalsWrapper'}>

        <div className={'LocationsWithAllAnimalsInner'}>

          <div className={'LocationsWithAllAnimalsButton'} onClick={() => {this.props.action()}}>
            Get locations with all animal Breeds
          </div>
          <div className={'ListOfLocations'}>

            {
              this.props.data.map((item) => {
                return (
                  <LocationCard title={item.name} />
                )
              })
            }

            {/*<LocationCard title={"Brian's #1 Animal Shelter"} />*/}
            {/*<LocationCard title={"Bobby Table's super shelter"} />*/}

          </div>
        </div>
      </div>
    )
  }
}

export default AllBreedsLocations
