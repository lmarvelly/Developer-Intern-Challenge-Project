import React, { Component } from 'react';

import uuid from 'uuid';
import { getDatabase, saveDatabase } from '../actions/databaseFunctions';

class WarehouseForm extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			uuid: uuid(),
			warehouseName: '',
			database: getDatabase()
		}
	}

	onNameChange = (e) =>
	{
		const warehouseName = e.target.value;

		this.setState({ warehouseName });
	}

	onSubmit = ( e ) =>
	{
		const uuid = this.state.uuid;
		const warehouseName = this.state.warehouseName

		const warehouseItem = 
		{
			uuid, 
			warehouseName
		}

		const updateDatabase = this.state.database;
		updateDatabase.warehouses = [ ...updateDatabase.warehouses, warehouseItem ];
		
		saveDatabase( updateDatabase );
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