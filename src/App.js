/* global google */
import React, { Component } from 'react';
import SideBar from './Sidebar.js'
import Map from './Map.js'
import "./index.css"
import FourSquareAPI from './API/index.js'
import $ from 'jquery';


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

  //Closes marker by setting isOpen to false
  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, markers )});
  };

  //Handles click directly on marker
  handleMarkerClick = (marker) => {
    //closes any marker besides selected location
    this.closeAllMarkers();

    //opens selected marker infowindow, 
    marker.isOpen = true;

    this.setState({activeMarker: Object.assign(this.state.activeMarker, marker)});
    // Takes the marker being passed in
    this.setState({markers: Object.assign(this.state.markers, marker)});
    const venue = this.state.venues.find(venue => venue.id = marker.id);
    FourSquareAPI.getVenueDetails(marker.id).then(res => {
      console.log(res);
      const newVenue = Object.assign(venue, res.response.venue);
      console.log(newVenue);
      this.setState({activeMarker: Object.assign(this.state.activeMarker, newVenue)});
    });
  };

  //Handles click on List Item 
  handleListItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
  };

  //Getting the venues and passing the info from FourSquare
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
      //Catch for if venue results does not load.
    }).catch(err => {
      alert('Sorry! There was an error retrieving the FourSquare API response. Please try again.')
    });
  }
render() {
    return (
    <main className="App" role='main'>
      <SideBar {...this.state} {...this.props} handleListItemClick={this.handleListItemClick}/>
      <Map {...this.state} handleMarkerClick={this.handleMarkerClick}/>
    </main>
    );
  }
}

export default App