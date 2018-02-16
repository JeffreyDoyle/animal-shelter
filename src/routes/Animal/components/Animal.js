import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Animal.scss'
import Details from './Details';
import About from './About';


class Animal extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'AnimalWrapper'}>

        <About />
        <Details />

      </div>
    )
  }
}

export default Animal
