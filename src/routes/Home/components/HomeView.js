import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import './HomeView.scss'
import cat from '../assets/cat.jpg';

class HomeView extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'HomeView'}>


        <div className={'imgSection'}>

          <div className={'topSquare'}>
          </div>

          <div className={'bottomSquare'}>
          </div>

          <img className={'image'} src={cat} />

        </div>

        <div className={'contentSection'}>

          <div className={'title'}>
            Adopt a pet, change a life.
          </div>

          <input id="email-input" placeholder={"Your email"}/>

          <div className={'getStartedButtonWrapper'}>

            <div className={'getStartedButton'} onClick={() => {this.props.login(document.getElementById('email-input').value, 'applicant')}}>
              Login as Adopter
            </div>
            <div className={'getStartedButton'} onClick={() => {this.props.login(document.getElementById('email-input').value, 'staff')}}>
              Login as Staff
            </div>
          </div>


        </div>

      </div>
    )
  }
}

export default HomeView
