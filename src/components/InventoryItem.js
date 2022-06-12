import React, { Component } from 'react';
import { removeItem } from '../actions/inventoryFunctions';

class InventoryItem extends Component
{
	constructor( props )
	{
		super( props );
		
		this.state =
		{
			editing: false
		}
	}

	handleDelete = (e) =>
	{
		removeItem(this.props.itemName, this.props.uuid);

		// Refresh page
		window.location.reload(false);
	}

	render()
	{
		return(
			<div>
				<span>{`Item: ${this.props.itemName} Price: £${this.props.price} Quantity: ${this.props.quantity}`}</span>
				<br />
				<button className='button-small' >edit</button>
				<button className='button-small-alt' onClick={this.handleDelete}>delete</button>
				<br />
				<hr />
			</div>
		)
	}
}

export default InventoryItem;