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
};

export const removeItem = (uuid) => (
{
	type: 'REMOVE_ITEM',
	uuid
});

export const startRemoveItem = ( uuid ) =>
{
	return (dispatch, getState) =>
	{
		return database.ref(`database/invertory/${uuid}`)
			.remove()
			.then((ref) =>
			{
				dispatch(removeItem(uuid))
			})
	}
}

export const editItem = ( uuid, updates ) => (
{
	type: 'EDIT_ITEM',
	uuid,
	updates
});

export const startEditItem = ( uuid, updates ) =>
{
	const { 
		itemName = '',
		warehouse = '',
		quantity = '' 
	} = updates;

	return ( dispatch, getState ) =>
	{
		return database.ref(`database/inventory/${uuid}`)
			.update({ itemName, warehouse, quantity })
			.then( dispatch( editItem( uuid, { itemName, warehouse, quantity } )));
	}
};