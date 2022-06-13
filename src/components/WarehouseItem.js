import React, { Component } from 'react';
import { removeWarehouse } from '../actions/databaseFunctions';

class WarehouseItem extends Component
{
	constructor( props )
	{
		super( props );

		this.state = 
		{
			editing: false,
			warehouseName: this.props.warehouseName
		}
	}

	handleDelete = () =>
	{
		removeWarehouse( this.state.warehouseName, this.props.uuid );

		// Refresh page
		window.location.reload(false);
	}

	render()
	{
		const component = (
			<div className='list-item__row'>
				<h3 className='list-item__title'>{`${this.state.warehouseName}`}</h3><br />
				<br />
				<button className='button-small' onClick={this.isEditing}>edit</button>
				<button className='button-small-alt' onClick={this.handleDelete}>delete</button>
			</div>
		);

		return(
			component
		);
	}
}

export default WarehouseItem;