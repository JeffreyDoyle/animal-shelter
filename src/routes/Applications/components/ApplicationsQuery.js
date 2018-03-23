import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/ApplicationsQuery.scss'
import RadioQueryItem from './RadioQueryItem';
import TextQueryItem from './TextQueryItem';
import SelectQueryItem from './SelectQueryItem';

class ApplicationsQuery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: [],
      type: '',
      input: '',
    };
  }

  componentWillMount () {
  }

  addToColumns = (item) => {
    this.setState({
      columns: this.state.columns.push(item)
    });
  };

  removeFromColumns = (item) => {
    this.setState({
      columns: this.state.columns.remove(item)
    })
  };

  render () {
    return (
      <div className={'QueryWrapper'}>

        <div className={'queryInner'}>

          <div className={'title'}>Search Applications</div>

          <div className={'subtitle'}>Columns you want</div>

          <SelectQueryItem title={'Application Status'} onCheck={() => {this.addToColumns('application_status')}} onUnCheck={() => {this.removeFromColumns('application_status')}} />

          <SelectQueryItem title={'Other Pets'} onCheck={() => {this.addToColumns('other_pets')}} onUnCheck={() => {this.removeFromColumns('other_pets')}} />

          <SelectQueryItem title={'Yearly Budget'} onCheck={() => {this.addToColumns('yearly_budget')}} onUnCheck={() => {this.removeFromColumns('yearly_budget')}} />

          <SelectQueryItem title={'Type Of Home'} onCheck={() => {this.addToColumns('type_of_home')}} onUnCheck={() => {this.removeFromColumns('type_of_home')}} />

          <SelectQueryItem title={'Application Id'} onCheck={() => {this.addToColumns('application_id')}} onUnCheck={() => {this.removeFromColumns('application_id')}} />

          <div className={'subtitle'}>Request type</div>

          <RadioQueryItem title={'Animal Id'} action={() => {this.props.query('max')}}/>

          <RadioQueryItem title={'Application Id'} action={() => {this.props.query('avg')}}/>

          <div className={'subtitle'}>Request input</div>

          <TextQueryItem title={'Input'} action={() => {this.props.query('avg')}}/>

          <div className={'queryButton'} onClick={() => {this.props.getAll()}}>
            Search
          </div>

        </div>


      </div>
    )
  }
}

export default ApplicationsQuery
