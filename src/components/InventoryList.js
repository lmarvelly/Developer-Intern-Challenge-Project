import React, { Component } from 'react';

import { getSavedInventory } from '../actions/inventoryFunctions';
import InventoryItem from './InventoryItem';

class InventoryList extends Component
{
	constructor( props )
	{
		super( props );

		this.state = 
		{
			inventoryList: getSavedInventory()
		}
	}

	componentDidUpdate = () =>
	{
		this.setState()
	}

	render()
	{
		return(
			<div>
				{
					this.state.inventoryList.map((inventory) =>
					{
						return(
							<InventoryItem
								key={inventory.uuid}
								itemName={inventory.itemName}
								price={inventory.price}
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