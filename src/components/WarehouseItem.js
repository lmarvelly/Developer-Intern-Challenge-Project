import React, { Component } from 'react';

class WarehouseItem extends Component
{
	constructor( props )
	{
		super( props );

		this.state = 
		{
			warehouseName: this.props.warehouseName
		}
	}

	render()
	{
		const component = (
			<div className='list-item__row'>
				<h3 className='list-item__title'>{`${this.state.warehouseName}`}</h3><br />
				<br />
				<button className='button-small' onClick={this.isEditing}>edit</button>
				<button className='button-small-alt' onClick={this.handleDelete}>delete</button>
			</div>
		);

		return(
			component
		);
	}
}

export default WarehouseItem;