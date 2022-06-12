import React, { Component } from 'react'
import uuid from 'uuid';

import { getSavedInventory, editItem, saveInventory } from '../actions/inventoryFunctions';

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
			price: this.props.price ? this.props.price : '',
			quantity: this.props.quantity ? this.props.quantity : '',
			inventoryList: []
		}
	}

	componentDidMount = () =>
	{
		this.setState({inventoryList: getSavedInventory() });
	}

	onNameChange = ( e ) =>
	{
		const itemName = e.target.value;
		this.setState({ itemName });
	}

	onPriceChange = ( e ) =>
	{
		const price = e.target.value;
		this.setState({ price });
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
		const price = this.state.price;
		const quantity = this.state.quantity;

		const inventoryItem = 
		{ 
			uuid, 
			itemName,
			price,
			quantity
		}

		if(this.state.formType === 'NEW_ITEM')
		{
			saveInventory( [...this.state.inventoryList, inventoryItem] );
		}
		else if(this.state.formType === 'EDIT_ITEM')
		{
			editItem(inventoryItem);
			this.props.isEditing(e);
			window.location.reload(false);
		}

		this.setState(
		{
			inventoryList: getSavedInventory()
		});
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
					id='price'
					className='text-input'
					value={this.state.price}
					onChange={this.onPriceChange}
					placeholder='0.00' 
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