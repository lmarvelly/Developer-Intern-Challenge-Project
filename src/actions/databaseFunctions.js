const defaultDataBase =
{
	werehouses: [],
	inventory: []
}

export const getDatabase = () =>
{
	const databaseJSON = localStorage.getItem( 'database' );

	return databaseJSON ? JSON.parse( databaseJSON ) : defaultDataBase;
}

export const saveDatabase = ( database ) =>
{
	localStorage.setItem('database', JSON.stringify(database));
}

export const removeItem = ( itemName, itemUuid ) =>
{
	if(confirm(`Are you sure you want to delete ${itemName} from your inventory?`))
	{
		let database = getDatabase();

		const itemIndex = database.inventory.findIndex((item) =>
		{
			return itemUuid === item.uuid;
		});

		database.inventory.splice( itemIndex, 1 )

		saveDatabase(database);

		alert(`${itemName} removed from inventory`)
	}
}

export const editItem = ( editedItem ) =>
{
	const database = getDatabase();
	const itemIndex = database.inventory.findIndex((item) =>
	{
		return editedItem.uuid === item.uuid;
	});

	database.inventory[itemIndex] = editedItem;
	saveDatabase(database);
}