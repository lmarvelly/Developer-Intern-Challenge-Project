export const getSavedInventory = () =>
{
	const inventoryListJSON = localStorage.getItem( 'inventoryList' );

	return inventoryListJSON ? JSON.parse( inventoryListJSON ) : [];
}

export const saveInventory = ( inventoryList ) =>
{
	localStorage.setItem('inventoryList', JSON.stringify(inventoryList));
}