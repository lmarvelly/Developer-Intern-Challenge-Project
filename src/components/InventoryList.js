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
			inventoryList: getDatabase().inventory ? getDatabase().inventory : [] 
		}
	}

	componentDidMount = () =>
	{
		console.log(this.state.inventoryList);
	}

	render()
	{
		
		return(
			<div>
				<h1>Inventory List</h1>
				{
					( this.state.inventoryList.length > 0 ) ?
					(
						this.state.inventoryList.map((inventory) =>
						{
							return(
								<InventoryItem
									key={inventory.uuid}
									uuid={inventory.uuid}
									itemName={inventory.itemName}
									warehouse={inventory.warehouse}
									quantity={inventory.quantity}
								/>
							);
						})
					)
					:
					(
						<span>No Inventory</span>
					)
				}
			</div>
		);
	}
}

export default InventoryList;