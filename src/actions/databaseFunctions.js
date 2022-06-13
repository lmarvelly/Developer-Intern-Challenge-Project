const defaultDataBase =
{
	warehouses: [],
	inventory: []
}

export const getDatabase = () =>
{
	const databaseJSON = localStorage.getItem( 'database' );

	return databaseJSON ? JSON.parse( databaseJSON ) : defaultDataBase;
}

export const getWarehouseName = ( warehouseUuid ) =>
{
	const database = getDatabase();

	const warehouseIndex = database.warehouses.findIndex( (warehouse) =>
	{
		return warehouseUuid === warehouse.uuid;
	});

	return database.warehouses[warehouseIndex].warehouseName;
}

export const saveDatabase = ( database ) =>
{
	localStorage.setItem('database', JSON.stringify(database));
}

export const removeItem = ( itemName, itemUuid ) =>
{
	if(confirm(`Are you sure you want to delete ${itemName} from your inventory?`))
	{
		const database = getDatabase();

		const itemIndex = database.inventory.findIndex((item) =>
		{
			return itemUuid === item.uuid;
		});

		database.inventory.splice( itemIndex, 1 )

		saveDatabase(database);

		alert(`${itemName} removed from inventory`);
	}
}

export const removeWarehouse = (warehouseName, warehouseUuid) =>
{
	if(confirm(`Are you sure you want to delete ${warehouseName} from your warehouses?`))
	{
		const database = getDatabase();

		const warehouseIndex = database.warehouses.findIndex((item) =>
		{
			return warehouseUuid === item.uuid;
		});

		database.warehouses.splice( warehouseIndex, 1);

		saveDatabase(database);

		alert(`${warehouseName} removed from Warehouses`);
	}
}

export const editInventoryItem = ( editedItem ) =>
{
	const database = getDatabase();
	const itemIndex = database.inventory.findIndex((item) =>
	{
		return editedItem.uuid === item.uuid;
	});

	database.inventory[itemIndex] = editedItem;
	saveDatabase(database);
}

export const editWarehouseItem = ( editedWarehouse ) =>
{
	const database = getDatabase();
	const warehouseIndex = database.warehouses.findIndex((warehouse) =>
	{
		return editedWarehouse.uuid === warehouse.uuid;
	});

	database.warehouses[warehouseIndex] = editedWarehouse;
	saveDatabase(database);
}