import React, { Component } from 'react';
import { connect } from 'react-redux';

import InventoryForm from './InventoryForm';
import { startRemoveItem } from '../actions/inventory';
// import { removeItem } from '../actions/databaseFunctions';

class InventoryItem extends Component
{
	constructor( props )
	{
		super( props );
		
		this.state =
		{
			editing: false,
			itemName: this.props.itemName,
			warehouseName: this.getWarehouseName(this.props.warehouse),
			quantity: this.props.quantity
		}
	}

	getWarehouseName = (warehouseUuid) =>
	{
		const warehouses = this.props.warehouses;

		const warehouseIndex = warehouses.findIndex( (childWarehouse) =>
		{
			return warehouseUuid === childWarehouse.uuid;
		});

		// Return 'Unknown' in case warehouse connected to an invertory item is deleted or not found
		return warehouses[warehouseIndex] ? warehouses[warehouseIndex].warehouseName : 'unknown';
	}

	isEditing = (e) =>
	{
		e.preventDefault();
		this.setState({editing: !this.state.editing});
	}

	handleDelete = (e) =>
	{
		// removeItem(this.state.itemName, this.props.uuid);

		this.props.startRemoveItem( this.props.uuid )
	}

	render()
	{
		const component = (
			<div className='list-item__row'>
				<h3 className='list-item__title'>{`${this.state.itemName}`}</h3><br />
				<span>{`Quantity: ${this.state.quantity}`}</span><br />
				<span>{`Warehouse: ${this.state.warehouseName}`}</span><br />
				<br />
				<button className='button-small' onClick={this.isEditing}>edit</button>
				<button className='button-small-alt' onClick={this.handleDelete}>delete</button>
			</div>
		);

		const inventoryForm = (
			<InventoryForm
				formType={'EDIT_ITEM'}
				isEditing={this.isEditing}
				uuid={this.props.uuid}
				itemName={this.props.itemName}
				warehouse={this.props.warehouse}
				quantity={this.props.quantity}
			/>
		);

		return(
			<div>
				{this.state.editing ? inventoryForm : component}
			</div>
		)
	}
}

const mapStateToProps = ( state ) =>
{
	return {
		warehouses: state.warehouses
	}
}

const mapDispatchToProps = ( dispatch ) => (
{
	startRemoveItem: ( uuid ) => dispatch( startRemoveItem( uuid ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( InventoryItem );