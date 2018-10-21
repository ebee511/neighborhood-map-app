import React, { Component } from 'react';
import VenueList from './VenueList'

class Sidebar extends Component {
	state = {
		query: "",
		venues: []
	}

	handleFilterVenues = () => {
		if(this.state.query.trim() !== '') {
			const venues = this.props.venues.filter(venue => venue.name.toLowerCase().includes(this.state.query.toLowerCase()))
			return venues;
		}
		return this.props.venues;
	};

	handleChange = (event) => {
		this.setState({ 
			query: event.target.value 
		})

		const markers = this.props.venues.map(venue => {
			const isMatched = venue.name
				.toLowerCase()
				.includes(event.target.value.toLowerCase())
			const marker = this.props.markers.find(
				marker => marker.id === venue.id
			);

			if(isMatched) {
				marker.isVisible = true;
			} else {
				marker.isVisible = false;
			}
			return marker;

		});
		this.props.updateSuperState({ markers })
	}

	render() {
		return (
			<div className='sideBar'>
				<h1>Coffee Grinds</h1>
				<input 
					type = 'search'
					id = {'search'} 
					placeholder='Filter Shops' 
					onChange ={this.handleChange}
					value = {this.state.query}
					aria-label='Type here to search a venue'
				/>
				<VenueList 
					{...this.props} 
					venues = {this.handleFilterVenues()} 
					handleListItemClick={this.props.handleListItemClick}
				/>
			</div>
		);
	}
}

export default Sidebar;