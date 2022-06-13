import React, { Component } from 'react'
import uuid from 'uuid';

import { getDatabase, editInventoryItem, saveDatabase } from '../actions/databaseFunctions';

class InventoryForm extends Component
{
	constructor( props )
	{
		super( props );
		this.state =
		{
			uuid: this.props.uuid ? this.props.uuid : uuid(),
			formType: this.props.formType,
			itemName: this.props.itemName ? this.props.itemName : '',
			warehouse: this.props.warehouse ? this.props.warehouse : '',
			quantity: this.props.quantity ? this.props.quantity : '',
			database: getDatabase()
		}
	}

	onNameChange = ( e ) =>
	{
		const itemName = e.target.value;
		this.setState({ itemName });
	}

	onWarehouseChange = ( e ) =>
	{
		const warehouse = e.target.value;
		this.setState({ warehouse });
	}

	onQuantityChange = ( e ) =>
	{
		const quantity = e.target.value;
		this.setState({ quantity });
	}

	onSubmit = ( e ) =>
	{
		const uuid = this.state.uuid;
		const itemName = this.state.itemName;
		const warehouse = this.state.warehouse;
		const quantity = this.state.quantity;

		const inventoryItem = 
		{ 
			uuid, 
			itemName,
			warehouse,
			quantity
		}

		const updateDatabase = this.state.database;

		updateDatabase.inventory = [ ...updateDatabase.inventory, inventoryItem ] 

		if(this.state.formType === 'NEW_ITEM')
		{
			saveDatabase( updateDatabase );
		}
		else if(this.state.formType === 'EDIT_ITEM')
		{
			editInventoryItem(inventoryItem);
			this.props.isEditing(e);
			window.location.reload(false); // needed because after item is edits page/componet does not refresh
		}
	}

	render()
	{
		return(
			<form onSubmit={this.onSubmit} className='form'>
				<input 
					id='itemName'
					className='text-input'
					value={this.state.itemName}
					onChange={this.onNameChange}
					placeholder='Item Name' 
					type="text" 
				/>
				<input 
					id='warehouse'
					className='text-input'
					value={this.state.warehouse}
					onChange={this.onWarehouseChange}
					placeholder='Warehouse Name' 
					type="text" 
				/>
				<input 
					id='quantity'
					className='text-input'
					value={this.state.quantity}
					onChange={this.onQuantityChange}
					placeholder='Amount in stock' 
					type="text" 
				/>

				<button className='button'>{this.props.itemName ? 'Edit Item' : 'Add new item'}</button>
			</form>
		);
	}
};

export default InventoryForm;