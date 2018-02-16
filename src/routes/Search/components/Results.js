import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Results.scss'
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
      <div className={'ResultsWrapper'}>

        {
          this.props.results ? this.props.results.map((result) => {

            return (
              <ResultCard data={result} />
            )
          })
            :
            null
        }

        <ResultCard data={{ name: 'Jimmy', species: 'Dog', breed: 'Retriever' }} />

        <ResultCard data={{ name: 'Timmy', species: 'Car', breed: 'Bulldog' }} />

        <ResultCard data={{ name: 'Mr.Bones', species: 'Dog', breed: 'French' }} />

      </div>
    )
  }
}

export default Results
