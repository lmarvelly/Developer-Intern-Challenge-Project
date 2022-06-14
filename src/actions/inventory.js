import database from '../firebase/firebase';

export const addItem = ( item ) => (
{	
	type: 'ADD_ITEM',
	item
});

export const startAddItem = ( inventoryData = {} ) =>
{
	return (dispatch, getState) => 
	{
		const { 
			itemName = '',
			warehouse = '',
			quantity = '' 
		} = inventoryData;

		const item = { itemName, warehouse, quantity }

		return database.ref('database/inventory')
			.push(item)
			.then((ref) =>
			{
				dispatch(addItem(
				{
					uuid: ref.key,
					...item
				}));
			});
	}
}

export const setInventory = ( inventory ) => (
{
	type: 'SET_INVENTORY',
	inventory
});

export const startSetInventory = () =>
{
	return ( dispatch, getState ) =>
	{
		return database.ref('database/inventory')
			.once('value')
			.then((snapshot) =>
			{
				const inventory = [];

				snapshot.forEach((childSnapshot) =>
				{
					inventory.push(
					{
						uuid: childSnapshot.key,
						...childSnapshot.val()
					});
				});

				dispatch(setInventory( inventory ))
			});
	}
}