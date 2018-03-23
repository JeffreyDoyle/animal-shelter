import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Animal.scss'
import Details from './Details';
import About from './About';
import {deleteAnimal} from "../modules/animal";


class Animal extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {

    return (
      <div className={'AnimalWrapper'}>

        <About deleteAnimal={this.props.deleteAnimal} />
        <Details />

      </div>
    )
  }
}

export default Animal
