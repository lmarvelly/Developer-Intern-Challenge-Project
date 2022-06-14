const warehouseRecordDefaultState = [];

export default (state = warehouseRecordDefaultState, action) =>
{
	switch (action.type) 
	{
		case 'SET_WAREHOUSES':
			return action.warehouses;
	
		default:
			return state;
	}
}