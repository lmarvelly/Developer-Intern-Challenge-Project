import React from 'react';

const InventoryItem = (props) => (
	<div>
		<p>{`${props.itemName} ${props.price} ${props.quantity}`}</p>
	</div>
);

export default InventoryItem;