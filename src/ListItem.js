import React from 'react';

const ListItem = (props) => {
	return (
		<li 
			className='listItem' 
			onClick={() => props.handleListItemClick(props)}
		>
			{props.name}
		</li>
	)
}

export default ListItem;