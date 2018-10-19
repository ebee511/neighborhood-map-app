import React from 'react';
import ListItem from './ListItem'


const VenueList = (props) => {
		return (
			<ol className='venueList'>
				{props.venues && 
					props.venues.map((venue, index) => (
						<ListItem 
							key={index} 
							{...venue} 
							handleListItemClick={props.handleListItemClick}
						/> 
					))
				}
			</ol>
		)
}

export default VenueList;