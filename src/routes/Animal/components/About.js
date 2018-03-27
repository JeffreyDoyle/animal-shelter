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

    this.props.updateAnimal({


    })
  }

  render () {

    return (
      <div className={'AboutWrapper'}>
        <div className={'AboutInner'}>

          <div className={'title'}>
            {this.props.data.animalName}
          </div>

          <div className={'item'}>
            <div className={'description'}>Name:</div><input id="animal-species" type="text" name="species" placeholder={this.props.data.animalName} />
          </div>

          <div className={'item'}>
            <div className={'description'}>Price:</div><input id="animal-breed" type="text" name="species" placeholder={this.props.data.price} />
          </div>

          <div className={'item'}>
            <div className={'description'}>Sex:</div><input type="text" name="age" placeholder={this.props.data.sex} />
          </div>

          <div className={'item'}>
            <div className={'description'}>Weight:</div><input id="animal-sex" type="text" name="sex" placeholder={this.props.data.weight} />
          </div>

          <div className={'item'}>
            <div className={'description'}>Special Needs:</div><input id="animal-type" type="text" name="type" placeholder={this.props.data.specialNeeds} />
          </div>

          {/*<div className={'euthenization-timer'}>*/}
            {/*<div className={'euth-title'}>TIME UNTIL EUTHENIZATION</div>*/}
            {/*<div className={'countdown'}>{this.state.timer} days</div>*/}
          {/*</div>*/}

          <div className={'deleteButton'} onClick={this.updateAnimal}>
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
