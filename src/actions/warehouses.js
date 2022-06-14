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
			warehouseName,
			warehouseLocation
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