import React, { Component } from 'react'


/**
 * inventory:
 * Item name
 * price
 * quanity
 */
class InventoryForm extends Component
{
	constructor( props )
	{
		super( props );
		this.state =
		{
			itemName: '',
			price: '',
			quantity: ''
		}
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

		const name = this.state.itemName;
		const price = this.state.price;

		console.log(name, price);
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

				<button className='button'>Add new item</button>
			</form>
		);
	}
};

export default InventoryForm;