const defaultDataBase =
{
	werehouses: [],
	inventory: []
}

// TODO: refactor getSavedInventory to getDatabase
export const getDatabase = () =>
{
	// const inventoryListJSON = localStorage.getItem( 'inventoryList' );
	const databaseJSON = localStorage.getItem( 'database' );

	return databaseJSON ? JSON.parse( databaseJSON ) : defaultDataBase;
}

// TODO: Refactor saveInventory TO saveDatabase
export const saveDatabase = ( database ) =>
{
	localStorage.setItem('database', JSON.stringify(database));
}

export const removeItem = ( itemName, itemUuid ) =>
{
	if(confirm(`Are you sure you want to delete ${itemName} from your inventory?`))
	{
		let database = getDatabase();

		const itemIndex = database.findIndex((item) =>
		{
			return itemUuid === item.uuid;
		});

		database.splice( itemIndex, 1 )

		saveInventory(database);

		alert(`${itemName} removed from inventory`)
	}
}

export const editItem = ( editedItem ) =>
{
	const inventoryList = getDatabase();
	const itemIndex = inventoryList.findIndex((item) =>
	{
		return editedItem.uuid === item.uuid;
	});

	inventoryList[itemIndex] = editedItem;
	saveInventory(inventoryList);
}