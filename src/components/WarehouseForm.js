import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { startAddWarehouse, startEditWarehouse } from '../actions/warehouses';

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
		e.preventDefault();
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
			this.props.startAddWarehouse(warehouseItem);
		}
		else if ( this.state.formType === 'EDIT_WAREHOUSE' ) 
		{
			this.props.startEditWarehouse(warehouseItem);
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

const mapDispatchToProps = ( dispatch ) => (
{
	startAddWarehouse: ({ ...warehouse }) => dispatch( startAddWarehouse({ ...warehouse })),
	startEditWarehouse: ( warehouse ) => dispatch( startEditWarehouse( warehouse.uuid, warehouse ) )
});

const mapStateToProps = ( state ) =>
{
	return {
		inventory: state.inventory,
		warehouses: state.warehouses
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( WarehouseForm );