import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/ResultCard.scss'
import ResultCard from './ResultCard';

class Results extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    console.log('render results', this.props);
    return (
      <div className={'ResultCardWrapper'} onClick={() => {browserHistory.push('/animal')}}>

        <div className={'ResultCardInner'}>

          <img className={'image'} src={'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Golden-Retriever-2.jpg'} />

          <div className={'content'}>
            <div className={'title'}>Jimmy</div>
            <div className={'breed'}>Golden Retriever</div>
            <div className={'location'}>Vancouver</div>
          </div>

        </div>

      </div>
    )
  }
}

export default Results
