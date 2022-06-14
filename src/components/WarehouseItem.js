import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeWarehouse, startRemoveWarehouse } from '../actions/warehouses';
import WarehouseForm from './WarehouseForm';

class WarehouseItem extends Component
{
	constructor( props )
	{
		super( props );

		this.state = 
		{
			editing: false,
			warehouseName: this.props.warehouseName,
			warehouseLocation: this.props.warehouseLocation
		}
	}

	handleDelete = () =>
	{
		this.props.startRemoveWarehouse( this.props.uuid );
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
				<span>{`Location: ${this.state.warehouseLocation}`}</span><br />
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
					warehouseLocation={this.props.warehouseLocation}
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

const mapDispatchToProps = ( dispatch ) => (
{
	startRemoveWarehouse: ( uuid ) => dispatch( startRemoveWarehouse( uuid ) )
});


export default connect( undefined, mapDispatchToProps )(WarehouseItem);