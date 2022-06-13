import React, { Component } from 'react';

import InventoryForm from './InventoryForm';
import { removeItem } from '../actions/databaseFunctions';

class InventoryItem extends Component
{
	constructor( props )
	{
		super( props );
		
		this.state =
		{
			editing: false,
			itemName: this.props.itemName,
			warehouse: this.props.warehouse,
			quantity: this.props.quantity
		}
	}

	isEditing = (e) =>
	{
		e.preventDefault();
		this.setState({editing: !this.state.editing});
	}

	handleDelete = (e) =>
	{
		removeItem(this.state.itemName, this.props.uuid);

		// Refresh page
		window.location.reload(false);
	}

	render()
	{
		const component = (
			<div className='list-item__row'>
				<h3 className='list-item__title'>{`${this.state.itemName}`}</h3><br />
				<span>{`Quantity: ${this.state.quantity}`}</span><br />
				<span>{`Warehouse: ${this.state.warehouse}`}</span><br />
				<br />
				<button className='button-small' onClick={this.isEditing}>edit</button>
				<button className='button-small-alt' onClick={this.handleDelete}>delete</button>
			</div>
		);

		const inventoryForm = (
			<InventoryForm
				formType={'EDIT_ITEM'}
				isEditing={this.isEditing}
				uuid={this.props.uuid}
				itemName={this.props.itemName}
				warehouse={this.props.warehouse}
				quantity={this.props.quantity}
			/>
		);

		return(
			<div>
				{this.state.editing ? inventoryForm : component}
			</div>
		)
	}
}

export default InventoryItem;