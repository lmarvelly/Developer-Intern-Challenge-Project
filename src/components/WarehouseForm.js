import React, { Component } from 'react';
import uuid from 'uuid';

class WarehouseForm extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			uuid: uuid(),
			warehouseName: '',
			database: []
		}
	}

	onNameChange = (e) =>
	{
		const warehouseName = e.target.value;

		this.setState({ warehouseName });
	}

	componentDidUpdate = () =>
	{
		console.log(this.state);
	}

	render()
	{
		return(
			<form onSubmit={this.onSubmit} className='form'>
				<input 
					id='warehouseName'
					className='text-input'
					value={this.state.warehouseName}
					onChange={this.onNameChange}
					placeholder='Item Name' 
					type="text" 
				/>
				<button className='button'>{this.props.warehouseName ? 'Edit Warehouse' : 'Add new Warehouse'}</button>
			</form>
		);
	}
}

export default WarehouseForm;