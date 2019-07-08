import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
 
const AnyReactComponent = () => <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' />;
const API_KEY = 'AIzaSyDH_AQwF7nmIwyfatkkzk66Yud785sqiDs';

class SimpleMap extends Component {

  state = {
    position: {
      lat: '',
      lng: ''
    },
    zoom: 19
  }

  componentDidMount = () => {

    this.setState({
      position: {
        lat: Number(this.props.lat),
        lng: Number(this.props.lng)
      }
    })
  }

  render() {
    const { position, zoom } = this.state
    return (
      <div style={{ height: 400, width: '50%', margin: '20px 0' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={position}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={position.lat}
            lng={position.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;