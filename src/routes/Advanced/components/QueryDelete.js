import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/CityLocations.scss'

class QueryDelete extends Component {
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
            <div className={'LocationInputButton'} onClick={() => {this.props.action(document.getElementById('QueryDelete-Input').value)}} >
              Delete Animals With This Name
            </div>

            <input id='QueryDelete-Input' className={'LocationInput'} />

          </div>

        </div>
      </div>
    )
  }
}

export default QueryDelete
