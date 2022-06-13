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

	render()
	{
		return(
			<div>
				<h1>Warehouse List</h1>

				{
					this.state.warehouseList.map((warehouse) =>
					{
						return(
							<WarehouseItem
								key={warehouse.uuid}
								uuid={warehouse.uuid}
								warehouseName={warehouse.warehouseName}
								warehouseLocation={warehouse.warehouseLocation}
							/>
						);
					})
				}
			</div>
		);
	};
}

export default WarehouseList;