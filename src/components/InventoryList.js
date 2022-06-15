import React, { Component } from 'react';
import { connect } from 'react-redux';

import InventoryItem from './InventoryItem';

class InventoryList extends Component
{
	constructor( props )
	{
		super( props );
	}

	render()
	{
		return(
			<div>
				<h1>Inventory List</h1>
				{
					( this.props.inventory.length > 0 )
					?
					(
						this.props.inventory.map((inventory) =>
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

const mapStateToProps = ( state ) =>
{
	return {
		inventory: state.inventory,
		warehouses: state.warehouses
	}
}

export default connect(mapStateToProps)( InventoryList );