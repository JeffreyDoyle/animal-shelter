import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Query.scss'
import TextQueryItem from './TextQueryItem';
import SelectQueryItem from './SelectQueryItem';
import RadioQueryItem from './RadioQueryItem';

class Query extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  componentDidMount () {
    this.props.getAll();
  }

  render () {
    return (
      <div className={'QueryWrapper'}>

        <div className={'queryInner'}>

          <div className={'title'}>Find your new best friend</div>

          {/*<TextQueryItem title={'Name'} />*/}

          {/*<SelectQueryItem title={'Species'} options={['1','2','3']} />*/}

          {/*<SelectQueryItem title={'Breed'} options={[]} />*/}

          {/*<SelectQueryItem title={'Type'} options={[]} />*/}

          {/*<SelectQueryItem title={'Sex'} options={['M', 'F']} />*/}

          {/*<TextQueryItem title={'Max Adoption Fee'} />*/}

          {/*<SelectQueryItem title={'Location'} options={[]} />*/}

          <RadioQueryItem title={'Max Adoption Fee'} action={() => {this.props.query('max')}}/>

          <RadioQueryItem title={'Average Adoption Fee'} action={() => {this.props.query('avg')}}/>

          <RadioQueryItem title={'Min Adoption Fee'} action={() => {this.props.query('min')}}/>

          <div className={'queryButton'} onClick={() => {this.props.getAll()}}>
            Reset
          </div>

          <div className={'popularSection'}>

            <div className={'mostPopularLabel'}>
              Species: {this.props.popular}
            </div>

            <div className={'popularQueryButton'} onClick={() => {this.props.getAll()}}>
              View Most Popular Species
            </div>

            <div className={'popularQueryButton'} onClick={() => {this.props.getAll()}}>
              View Least Popular Species
            </div>
          </div>

        </div>


      </div>
    )
  }
}

export default Query
