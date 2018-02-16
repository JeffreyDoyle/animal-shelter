import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Query.scss'
import TextQueryItem from './TextQueryItem';
import SelectQueryItem from './SelectQueryItem';

class Query extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'QueryWrapper'}>

        <div className={'queryInner'}>

          <div className={'title'}>Find your new best friend</div>

          <TextQueryItem title={'Name'} />

          <SelectQueryItem title={'Species'} options={['1','2','3']} />

          <SelectQueryItem title={'Breed'} options={[]} />

          <SelectQueryItem title={'Type'} options={[]} />

          <SelectQueryItem title={'Sex'} options={['M', 'F']} />

          <TextQueryItem title={'Max Adoption Fee'} />

          <SelectQueryItem title={'Location'} options={[]} />


          <div className={'queryButton'}>
            Search!
          </div>

        </div>


      </div>
    )
  }
}

export default Query
