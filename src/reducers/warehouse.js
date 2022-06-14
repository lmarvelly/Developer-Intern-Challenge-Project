const warehouseRecordDefaultState = [];

export default (state = warehouseRecordDefaultState, action) =>
{
	switch (action.type) 
	{
		case 'SET_WAREHOUSES':
			console.log('Returning warehouses');
			return action.warehouses;
	
		default:
			console.log('returning default');
			return state;
	}
}