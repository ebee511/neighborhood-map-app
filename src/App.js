/* global google */
import React, { Component } from 'react';
import SideBar from './Sidebar.js'
import Map from './Map.js'
import "./index.css"
import FourSquareAPI from './API/index.js'

class App extends Component {
  
  state = {
    venues: [],
    markers: [], 
    center: [],
    zoom: 12,
    activeMarker: [],
    updateSuperState: obj => {
      this.setState(obj);
    }
  };

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, markers )});
  };

  handleMarkerClick = (marker) => {
    this.closeAllMarkers();
    
    marker.isOpen = true;
    this.state.activeMarker = marker;
    this.setState({activeMarker: Object.assign(this.state.activeMarker, marker)});
    this.setState({markers: Object.assign(this.state.markers, marker)});
    const venue = this.state.venues.find(venue => venue.id = marker.id);
    FourSquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({activeMarker: Object.assign(this.state.activeMarker, newVenue)});
      // console.log(newVenue);
    });
  };

  handleListItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
  };

  componentDidMount() {
    FourSquareAPI.search({
      near: "Tucson, AZ",
      query: 'coffee',
      limit: 10
    }).then(results => {
      const {venues} = results.response;
      const {center} = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
          id: venue.id,
          title: venue.name,
        };
      });
      this.setState({venues, center, markers});
      console.log(results)
    });
  }
render() {
    return (
    <div className="App">
      <SideBar {...this.state} {...this.props} handleListItemClick={this.handleListItemClick}/>
      <Map {...this.state} handleMarkerClick={this.handleMarkerClick}/>
    </div>
    );
  }
}

export default App