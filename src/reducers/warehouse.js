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
		
		case 'REMOVE_WAREHOUSE':
			return state.filter(({ uuid }) => uuid !== action.uuid);
		default:
			return state;
	}
}