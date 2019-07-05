import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const AnyReactComponent = ({ icon }) => <div><FontAwesomeIcon icon={icon} size='2x' /></div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.506632,
      lng: 127.053688
    },
    zoom: 19
  };
 
  render() {
    return (
      <div style={{ height: '400px', width: '50%', margin: '30px 0' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAY9VS1hW8oe2x4qReuohUW3Df4Hc8KpC0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            icon={faMapMarkerAlt}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;