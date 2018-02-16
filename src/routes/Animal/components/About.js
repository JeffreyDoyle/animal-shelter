import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/About.scss'


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

  render () {

    return (
      <div className={'AboutWrapper'}>
        <div className={'AboutInner'}>

          <div className={'title'}>
            Jimmy
          </div>

          <div className={'item'}>
            <div className={'description'}>Species:</div><div>Dog</div>
          </div>

          <div className={'item'}>
            <div className={'description'}>Breed:</div><div>Golden Retriever</div>
          </div>

          <div className={'item'}>
            <div className={'description'}>Age:</div><div>10</div>
          </div>

          <div className={'item'}>
            <div className={'description'}>Sex:</div><div>Male</div>
          </div>

          <div className={'item'}>
            <div className={'description'}>Type:</div><div>Domestic</div>
          </div>

          <div className={'euthenization-timer'}>
            <div className={'euth-title'}>TIME UNTIL EUTHENIZATION</div>
            <div className={'countdown'}>{this.state.timer} days</div>
          </div>

        </div>
      </div>
    )
  }
}

export default Animal
