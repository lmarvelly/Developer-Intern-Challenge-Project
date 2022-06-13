import React, { Component } from 'react';

import { getDatabase } from '../actions/databaseFunctions';
import InventoryItem from './InventoryItem';

class InventoryList extends Component
{
	constructor( props )
	{
		super( props );

		this.state = 
		{
			inventoryList: getDatabase()
		}
	}

	render()
	{
		return(
			<div>
				<h1>Inventory List</h1>
				{
					this.state.inventoryList.map((inventory) =>
					{
						return(
							<InventoryItem
								key={inventory.uuid}
								uuid={inventory.uuid}
								itemName={inventory.itemName}
								werehouse={inventory.werehouse}
								quantity={inventory.quantity}
							/>
						);
					})
				}
			</div>
		);
	}
}

export default InventoryList;