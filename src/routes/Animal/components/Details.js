import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Details.scss'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Animal extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'DetailsWrapper'}>

        <div className={'DetailsInner'}>

          <img className={'image'} src={'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Golden-Retriever-2.jpg'} />



          {/*<div className={'map'}>*/}

            {/*/!*<GoogleMapReact*!/*/}
              {/*/!*bootstrapURLKeys={{ key: ['AIzaSyB2GAnHXZH4UieteVpU1fIpcyQBIrUhBsE'] }}*!/*/}
              {/*/!*defaultCenter={{ center: { lat: 59.95, lng: 30.33 } }}*!/*/}
              {/*/!*defaultZoom={11}*!/*/}
            {/*/!*>*!/*/}
              {/*/!*<AnyReactComponent text={'Kreyser Avrora'} lat={59.955413} lng={30.337844}></AnyReactComponent>*!/*/}
            {/*/!*</GoogleMapReact>*!/*/}

          {/*</div>*/}

        </div>

      </div>
    )
  }
}

export default Animal
