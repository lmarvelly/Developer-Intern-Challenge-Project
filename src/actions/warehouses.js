import database from '../firebase/firebase';

export const addWarehouse = ( warehouse ) => (
{
	type: 'ADD_WAREHOUSE',
	warehouse
});

export const startAddWarehouse = ( warehouseData = {} ) =>
{
	return (dispatch, getState) =>
	{
		const {
			warehouseName = '',
			warehouseLocation = ''
		} = warehouseData

		const warehouse = { warehouseName, warehouseLocation }

		return database.ref('database/warehouses')
			.push( warehouse )
			.then( (ref) =>
			{
				dispatch(addWarehouse(
				{
					uuid: ref.key,
					...warehouse
				}));
			});
	}
}

export const setWarehouses = ( warehouses ) => (
{
	type: 'SET_WAREHOUSES',
	warehouses
});

export const startSetWarehouses = () =>
{
	return ( dispatch, getState ) =>
	{
		return database.ref('database/warehouses')
			.once('value')
			.then((snapshot) =>
			{
				const warehouses = [];

				snapshot.forEach((childSnapshot) =>
				{
					warehouses.push(
					{
						uuid: childSnapshot.key,
						...childSnapshot.val()
					});
				});

				dispatch(setWarehouses( warehouses ));
			})
	}
}

export const removeWarehouse = ( uuid ) => (
{
	type: 'REMOVE_WAREHOUSE',
	uuid
});

export const startRemoveWarehouse = ( uuid ) =>
{
	return (dispatch, getState) =>
	{
		return database.ref(`database/warehouses/${uuid}`)
			.remove()
			.then((ref) =>
			{
				dispatch(removeWarehouse(uuid))
			})
	}
}

export const editWarehouse = ( uuid, updates ) => (
{
	type: 'EDIT_WAREHOUSE',
	uuid,
	updates
});

export const startEditWarehouse = ( uuid, updates ) =>
{
	const {
		warehouseName = '',
		warehouseLocation = ''
	} = updates;

	return ( dispatch, getState ) =>
	{
		return database.ref(`database/warehouses/${uuid}`)
			.update({ warehouseName, warehouseLocation })
			.then( dispatch( editWarehouse( uuid, { warehouseName, warehouseLocation })));
	}
};