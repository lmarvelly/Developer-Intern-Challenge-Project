export const getSavedInventory = () =>
{
	const inventoryListJSON = localStorage.getItem( 'inventoryList' );

	return inventoryListJSON ? JSON.parse( inventoryListJSON ) : [];
}

export const saveInventory = ( inventoryList ) =>
{
	localStorage.setItem('inventoryList', JSON.stringify(inventoryList));
}

export const removeItem = ( itemName, itemUuid ) =>
{
	if(confirm(`Are you sure you want to delete ${itemName} from your inventory?`))
	{
		let inventoryList = getSavedInventory();

		const itemIndex = inventoryList.findIndex((item) =>
		{
			return itemUuid === item.uuid;
		});

		inventoryList.splice( itemIndex, 1 )

		saveInventory(inventoryList);

		alert(`${itemName} removed from inventory`)
	}
}

export const editItem = ( editedItem ) =>
{
	const inventoryList = getSavedInventory();
	const itemIndex = inventoryList.findIndex((item) =>
	{
		return editedItem.uuid === item.uuid;
	});

	inventoryList[itemIndex] = editedItem;
	saveInventory(inventoryList);
}