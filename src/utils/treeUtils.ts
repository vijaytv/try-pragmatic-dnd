const findItem = (items: any, id: string) => {
	for (const item of items) {
		if (item.id === id) {
			return item;
		}
		if (item.nodes) {
			const foundItem = findItem(item.nodes, id);
			if (foundItem) {
				return foundItem;
			}
		}
	}
	return null;
};

const updateItem = (items: any, updatedItem: any) => {
	const updatedItems = items.map((item: any) => {
		if (item.id === updatedItem.id) {
			return {
				...item,
				...updatedItem,
			};
		}
		if (item.nodes) {
			const updatedNodes = updateItem(item.nodes, updatedItem);
			return {
				...item,
				nodes: updatedNodes,
			};
		}
		return item;
	});
	return updatedItems;
};

export { findItem, updateItem };
