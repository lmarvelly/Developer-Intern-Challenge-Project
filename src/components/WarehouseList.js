import React, { Component } from 'react';
import { connect } from 'react-redux';

import WarehouseItem from './WarehouseItem';

class WarehouseList extends Component
{
	constructor( props )
	{
		super( props );
	}

	render()
	{
		return(
			<div>
				<h1>Warehouse List</h1>

				{
					( this.props.warehouses.length > 0 ) 
					?
					(
						this.props.warehouses.map((warehouse) =>
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
					)
					:
					(
						<span>No Warehouses</span>
					)
				}
			</div>
		);
	};
}

const mapStateToProps = ( state ) =>
{
	return {
		inventory: state.inventory,
		warehouses: state.warehouses
	}
}

export default connect(mapStateToProps)( WarehouseList );