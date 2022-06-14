const warehouseRecordDefaultState = [];

export default (state = warehouseRecordDefaultState, action) =>
{
	switch (action.type) 
	{
		case 'ADD_WAREHOUSE':
			return [
				...state,
				action.warehouse
			];
		case 'SET_WAREHOUSES':
			return action.warehouses;
	
		default:
			return state;
	}
}