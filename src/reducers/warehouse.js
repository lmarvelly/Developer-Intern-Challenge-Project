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
		case 'EDIT_WAREHOUSE':
			return state.map( (warehouse) =>
			{
				if( warehouse.uuid === action.uuid )
				{
					return {
						...warehouse,
						...action.updates
					}
				}
				else { return warehouse }
			});
		case 'REMOVE_WAREHOUSE':
			return state.filter(({ uuid }) => uuid !== action.uuid);
		default:
			return state;
	}
}