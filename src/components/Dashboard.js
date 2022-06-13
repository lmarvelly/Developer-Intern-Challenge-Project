import React from 'react';

import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';
import WarehouseForm from './WarehouseForm';

const Dashboard = () => (
	<div className='content-container'>
		<h1>Add New Item</h1>
		<InventoryForm formType={'NEW_ITEM'} />
		<hr />

		<h1>Add New Warehouse</h1>
		<WarehouseForm />
		<hr />

		<InventoryList />

		<h1>Warehouse List</h1>
		<span>TODO: Add warehouse list</span>

	</div>
);

export default Dashboard;