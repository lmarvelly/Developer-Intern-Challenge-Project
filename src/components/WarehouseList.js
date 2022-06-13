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
			<div>
				<h1>Warehouse List</h1>

				{
					this.state.warehouseList.map((warehouse) =>
					{
						return(
							<WarehouseItem
								warehouseName={warehouse.warehouseName}
							/>
						);
					})
				}
			</div>
		);
	};
}

export default WarehouseList;