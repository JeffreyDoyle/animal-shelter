import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/About.scss'
import {deleteAnimal} from "../modules/animal";


class Animal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timer: 60
    }
  }

  componentWillMount () {
  }

  componentDidMount () {

  };

  updateAnimal = () => {


  }

  render () {

    return (
      <div className={'AboutWrapper'}>
        <div className={'AboutInner'}>

          <div className={'title'}>
            Jimmy
          </div>

          <div className={'item'}>
            <div className={'description'}>Species:</div><input type="text" name="species" placeholder="Dog" />
          </div>

          <div className={'item'}>
            <div className={'description'}>Breed:</div><input type="text" name="species" placeholder="Golden Retriever" />
          </div>

          <div className={'item'}>
            <div className={'description'}>Age:</div><input type="text" name="age" placeholder="10" />
          </div>

          <div className={'item'}>
            <div className={'description'}>Sex:</div><input type="text" name="sex" placeholder="Male" />
          </div>

          <div className={'item'}>
            <div className={'description'}>Type:</div><input type="text" name="type" placeholder="Domestic" />
          </div>

          {/*<div className={'euthenization-timer'}>*/}
            {/*<div className={'euth-title'}>TIME UNTIL EUTHENIZATION</div>*/}
            {/*<div className={'countdown'}>{this.state.timer} days</div>*/}
          {/*</div>*/}

          <div className={'deleteButton'} onClick={() => {this.props.deleteAnimal('a')}}>
            Update this Animal
          </div>

          <div className={'deleteButton'} onClick={() => {this.props.deleteAnimal('a')}}>
            Delete this Animal
          </div>

        </div>
      </div>
    )
  }
}

export default Animal
