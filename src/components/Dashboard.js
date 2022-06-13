import React from 'react';

import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';
import WerehouseForm from './WerehouseForm';

const Dashboard = () => (
	<div className='content-container'>
		<h1>Add New Item</h1>
		<InventoryForm formType={'NEW_ITEM'} />
		<hr />

		<h1>Add New Werehouse</h1>
		<WerehouseForm />
		<hr />

		<InventoryList />

		<h1>Werehouse List</h1>
		<span>TODO: Add werehouse list</span>

	</div>
);

export default Dashboard;