import React from 'react';

const ListItem = (props) => {
	return (
		<li 
			tabIndex={0}
			aria-label={props.name}
			className='listItem' 
			onClick={() => props.handleListItemClick(props)}
		>
			{props.name}
		</li>
	)
}

export default ListItem;