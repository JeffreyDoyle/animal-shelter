import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import '../styles/Details.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Details extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={'DetailsWrapper'}>

        <div className={'DetailsInner'}>

          {/*<img className={'image'} src={this.props.application.imgUrl} />*/}

          {/*<div className={'map'}>*/}

          {/*/!*<GoogleMapReact*!/*/}
          {/*/!*bootstrapURLKeys={{ key: ['AIzaSyB2GAnHXZH4UieteVpU1fIpcyQBIrUhBsE'] }}*!/*/}
          {/*/!*defaultCenter={{ center: { lat: 59.95, lng: 30.33 } }}*!/*/}
          {/*/!*defaultZoom={11}*!/*/}
          {/*/!*>*!/*/}
          {/*/!*<AnyReactComponent text={'Kreyser Avrora'} lat={59.955413} lng={30.337844}></AnyReactComponent>*!/*/}
          {/*/!*</GoogleMapReact>*!/*/}

          {/*</div>*/}

          <div className={'detailsButtonApplication'} onClick={() => {browserHistory.push('/animal?id=' + this.props.application.animalId)}}>
            View Animal
          </div>

        </div>

      </div>
    )
  }
}

export default Details
