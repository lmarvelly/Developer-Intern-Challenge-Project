import React, { Component } from 'react';

import InventoryForm from './InventoryForm';
import { removeItem } from '../actions/inventoryFunctions';

class InventoryItem extends Component
{
	constructor( props )
	{
		super( props );
		
		this.state =
		{
			editing: false,
			itemName: this.props.itemName,
			werehouse: this.props.werehouse,
			quantity: this.props.quantity
		}
		
		console.log(this.state);
	}

	isEditing = (e) =>
	{
		e.preventDefault();
		this.setState({editing: !this.state.editing});
	}

	handleDelete = (e) =>
	{
		removeItem(this.props.itemName, this.props.uuid);

		// Refresh page
		window.location.reload(false);
	}

	render()
	{
		const buttons = (
			<div className='list-item__row'>
				<h3 className='list-item__title'>{`${this.state.itemName}`}</h3><br />
				<span>{`Quantity: ${this.state.quantity}`}</span><br />
				<span>{`Werehouse: ${this.state.werehouse}`}</span><br />
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
				werehouse={this.props.werehouse}
				quantity={this.props.quantity}
			/>
		);

		return(
			<div>
				{this.state.editing ? inventoryForm : buttons}
			</div>
		)
	}
}

export default InventoryItem;