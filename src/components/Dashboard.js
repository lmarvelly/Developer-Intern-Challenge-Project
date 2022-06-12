import React from 'react';

import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';

const Dashboard = () => (
	<div className='content-container'>
		<InventoryForm />
		<InventoryList />
	</div>
);

export default Dashboard;