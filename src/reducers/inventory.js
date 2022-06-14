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
		case 'SET_INVENTORY':
			return action.inventory;
	
		default:
			return state;
	}
}