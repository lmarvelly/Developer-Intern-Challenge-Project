import React, { Component } from 'react';

import uuid from 'uuid';
import { getDatabase, editWarehouseItem, saveDatabase } from '../actions/databaseFunctions';

class WarehouseForm extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			uuid: this.props.uuid ? this.props.uuid : uuid(),
			formType: this.props.formType,
			warehouseName: this.props.warehouseName ? this.props.warehouseName : '',
			warehouseLocation: this.props.warehouseLocation ? this.props.warehouseLocation : '',
			database: getDatabase()
		}
	}

	onNameChange = (e) =>
	{
		const warehouseName = e.target.value;

		this.setState({ warehouseName });
	}

	onLocationChange = (e) =>
	{
		const warehouseLocation = e.target.value;

		this.setState({ warehouseLocation });
	}

	onSubmit = ( e ) =>
	{
		const uuid = this.state.uuid;
		const warehouseName = this.state.warehouseName;
		const warehouseLocation = this.state.warehouseLocation;

		const warehouseItem = 
		{
			uuid, 
			warehouseName,
			warehouseLocation
		}

		if ( this.state.formType === 'NEW_WAREHOUSE' )
		{
			const updateDatabase = this.state.database;
			updateDatabase.warehouses = [ ...updateDatabase.warehouses, warehouseItem ];
			
			saveDatabase( updateDatabase );
		}
		else if ( this.state.formType === 'EDIT_WAREHOUSE' ) 
		{
			editWarehouseItem(warehouseItem);
			this.props.isEditing(e);
			window.location.reload(false); // needed because after item is edits page/componet does not refresh
		}
		else
		{
			alert('Whoops something went wrong');
			window.location.reload(false); 
		}
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
					placeholder='Warehouse Name' 
					type="text" 
				/>
				<input 
					id='warehouseLocation'
					className='text-input'
					value={this.state.warehouseLocation}
					onChange={this.onLocationChange}
					placeholder='Warehouse Location' 
					type="text" 
				/>
				<button className='button'>{this.props.warehouseLocation ? 'Edit Warehouse' : 'Add new Warehouse'}</button>
			</form>
		);
	}
}

export default WarehouseForm;