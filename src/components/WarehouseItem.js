import React, { Component } from 'react';
import { removeWarehouse } from '../actions/databaseFunctions';
import WarehouseForm from './WarehouseForm';

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

	isEditing = (e) =>
	{
		e.preventDefault();
		this.setState({editing: !this.state.editing});
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

		const warehouseForm = (
			<div>
				<WarehouseForm
					formType={'EDIT_WAREHOUSE'}
					isEditing={this.isEditing}
					uuid={this.props.uuid}
					warehouseName={this.props.warehouseName}
				/>
			</div>
		);

		return(
			<div>
				{ this.state.editing ? warehouseForm : component }
			</div>
		);
	}
}

export default WarehouseItem;