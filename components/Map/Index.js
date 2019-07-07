import React, { Component } from 'react';

class Map extends Component {

  componentDidMount() {

    const { lat, lng } = this.props;

    const position = {
      lat: Number(lat),
      lng: Number(lng)
    };

    const map = new google.maps.Map(this.map, {
      zoom: 19,
      center: position
    });
    
    const marker = new google.maps.Marker({
      position: position,
      map: map
    });
  }

  render() {

    return (
      <div style={{width:'50%', height:'400px', margin: '30px 0'}} ref={element => this.map=element}>

      </div>
    );
  }
}
 
export default Map;