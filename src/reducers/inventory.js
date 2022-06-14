const inventoryRecordDefaultState = [];

export default (state = inventoryRecordDefaultState, action) =>
{
	switch (action.type) 
	{
		case 'ADD_ITEM':
			return [
				...state,
				action.item
			];
		case 'REMOVE_ITEM':
			return state.filter(({ uuid }) => uuid !== action.uuid);
		case 'SET_INVENTORY':
			return action.inventory;
	
		default:
			return state;
	}
}