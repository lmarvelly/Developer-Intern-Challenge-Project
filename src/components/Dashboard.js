import React from 'react';

import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';

const Dashboard = () => (
	<div className='content-container'>
		<h1>Add New Item</h1>
		<InventoryForm />
		<hr />

		<h1>Add New Werehouse</h1>
		<span>TODO: Add werehouse form here</span>
		<hr />

		<InventoryList />

		<h1>Werehouse List</h1>
		<span>TODO: Add werehouse list</span>

	</div>
);

export default Dashboard;