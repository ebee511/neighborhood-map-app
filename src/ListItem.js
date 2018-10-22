import React from 'react';
import $ from 'jquery';

const ListItem = (props) => {
	return (
		<li 
			tabIndex={0}
			aria-label={props.name}
			role='button'
			className='listItem' 
			onClick={() => props.handleListItemClick(props)}
			onKeyPress={() => props.handleListItemClick(props)}
		>
			{props.name}
		</li>
	)
}

export default ListItem;