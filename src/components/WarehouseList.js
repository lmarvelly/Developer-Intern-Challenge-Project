import React, { Component } from 'react';

import { getDatabase } from '../actions/databaseFunctions';
import WarehouseItem from './WarehouseItem';

class WarehouseList extends Component
{
	constructor( props )
	{
		super( props );

		this.state =
		{
			warehouseList: getDatabase().warehouses
		}
	}

	componentDidUpdate = () =>
	{
		console.log(this.state.warehouseList);
	}

	render()
	{
		console.log(this.state.warehouseList);
		return(
			<WarehouseItem
				warehouseName={this.state.warehouseList[0].warehouseName}
			/>
		);
	};
}

export default WarehouseList;