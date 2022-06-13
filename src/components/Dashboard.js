import React from 'react';

import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';
import WarehouseForm from './WarehouseForm';
import WarehouseList from './WarehouseList';

const Dashboard = () => (
	<div className='content-container'>
		<h1>Add New Item</h1>
		<InventoryForm formType={'NEW_ITEM'} />
		<hr />

		<h1>Add New Warehouse</h1>
		<WarehouseForm />
		<hr />

		<InventoryList />

		<WarehouseList />

	</div>
);

export default Dashboard;