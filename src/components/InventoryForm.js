import React, { Component } from 'react'
import uuid from 'uuid';

import { getDatabase, editItem, saveDatabase } from '../actions/inventoryFunctions';

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
			werehouse: this.props.werehouse ? this.props.werehouse : '',
			quantity: this.props.quantity ? this.props.quantity : '',
			database: []
		}
	}

	componentDidMount = () =>
	{
		this.setState({database: getDatabase() });
	}

	onNameChange = ( e ) =>
	{
		const itemName = e.target.value;
		this.setState({ itemName });
	}

	onWerehouseChange = ( e ) =>
	{
		const werehouse = e.target.value;
		this.setState({ werehouse });
	}

	onQuantityChange = ( e ) =>
	{
		const quantity = e.target.value;
		this.setState({ quantity });
	}

	onSubmit = ( e ) =>
	{
		e.preventDefault();

		const uuid = this.state.uuid;
		const itemName = this.state.itemName;
		const werehouse = this.state.werehouse;
		const quantity = this.state.quantity;

		const inventoryItem = 
		{ 
			uuid, 
			itemName,
			werehouse,
			quantity
		}

		if(this.state.formType === 'NEW_ITEM')
		{
			saveDatabase( [...this.state.database, inventoryItem] );
		}
		else if(this.state.formType === 'EDIT_ITEM')
		{
			editItem(inventoryItem);
			this.props.isEditing(e);
		}

		window.location.reload(false);
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
					id='werehouse'
					className='text-input'
					value={this.state.werehouse}
					onChange={this.onWerehouseChange}
					placeholder='Werehouse Name' 
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