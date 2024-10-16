import { useEffect, useState } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

import "./App.css";
import { flushSync } from "react-dom";
import Content from "./components/Content";
import { updateItem } from "./utils/treeUtils";
const generateRandomId = () => {
	return crypto.randomUUID();
};

const Header = () => {
	return (
		<header
			style={{ height: "80px", backgroundColor: "#333", padding: "10px" }}
		>
			<h1>Pragmatic DND</h1>
		</header>
	);
};

function App() {
	const [rootItems, setRootItems] = useState<any>([]);
	const handleSaveItem = (e: any) => {
		console.log(e);
		const updatedRootItems = updateItem(rootItems, e);
		console.log(updatedRootItems);
		flushSync(() => {
			setRootItems(updatedRootItems);
		});
	};
	useEffect(() => {
		return monitorForElements({
			onDrop({ source, location }) {
				const { data } = source;
				if (!location?.current?.dropTargets || data.canDrag === false) {
					return;
				}
				console.log(data, location.current.dropTargets[0]);
				const newId = generateRandomId();
				let newRootItems = [...rootItems];
				if (
					location?.current?.dropTargets?.[0]?.data?.name === "flexrow" ||
					location?.current?.dropTargets?.[0]?.data?.name === "flexcol" ||
					location?.current?.dropTargets?.[0]?.data?.name === "cssgrid"
				) {
					newRootItems = newRootItems.map((item: any) => {
						if (location.current.dropTargets[0].data.id === item.id) {
							return {
								...item,
								nodes: [
									...item.nodes,
									{
										id: newId,
										name: data.name,
										nodes: [],
									},
								],
							};
						}
						return item;
					});
				} else {
					newRootItems = [
						...rootItems,
						{
							id: newId,
							name: data.name,
							nodes: [],
						},
					];
				}
				console.log(newRootItems);
				flushSync(() => {
					setRootItems(newRootItems);
				});
			},
		});
	}, [rootItems]);

	return (
		<>
			<Header />
			<Content droppedItems={rootItems} handleSaveItem={handleSaveItem} />
		</>
	);
}

export default App;
