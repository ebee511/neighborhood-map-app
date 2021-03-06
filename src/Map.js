/* global google */
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import $ from 'jquery';
import "./index.css";

const MyMapComponent = withScriptjs(
	withGoogleMap(props => (
	  	<GoogleMap
	    defaultZoom={8} 
	    zoom = {props.zoom}
	    defaultCenter={{ lat: -34.397, lng: 150.644 }}
	    center = {props.center}
	  	>
		   {props.markers && 
		    	props.markers
		    	//Filters markers on the map and recreates showing markers with map method
		    		.filter(marker => marker.isVisible)
		    		.map((marker, index, arr) => {
		    			const venueInfo = props.venues.find(venue => venue.id = marker.id);
		    			return (
		    				<Marker 
		    					key={index} 
		    					title={marker.title}
		    					position={{ lat: marker.lat, lng: marker.lng }}
		    					animation = {props.activeMarker.title === marker.title ? window.google.maps.Animation.BOUNCE : null}
		    					onClick={
		    						() => props.handleMarkerClick(marker)
		    					}
		    				>
		    					{marker.isOpen && (
		    						//InfoWindow with details on what to render
		    						<InfoWindow>
		    							<div>
		    								<p>{venueInfo.name}</p>
		    								<p>{venueInfo.location.address}</p>
		    								<p>Rating: {venueInfo.rating}</p>
		    								<p>Data from FourSquareAPI</p>
		    							</div>
		    						</InfoWindow>
		    					)}
		    				</Marker>
		    			);
		    		}
		    	)
		   }
	  	</GoogleMap>
	))
);

window.gm_authFailure = () => {
    alert('There was a problem loading Google Maps! Please try to refresh!');
    $('.gm-err-title').text('GOOGLE MAPS LOADING ERROR!')
    $('.gm-err-message').text('Google Maps had a problem loading. Please refresh page!');
};

export default class Map extends Component {

	render() {
		return (
			<MyMapComponent
				{...this.props}
	  			isMarkerShown
	  			googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBIy3BoQwwxWi5E2burrVHBWeBPcNV8lVs"
			   loadingElement={<div style={{ height: `100%` }} />}
			   containerElement={<div id='map' />}
			  	mapElement={<div style={{ height: `100%` }} />}
			/>

		);
	}
}

