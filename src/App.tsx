import { useEffect, useState } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

import "./App.css";
import { flushSync } from "react-dom";
import Content from "./components/Content";
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
	const [rootItems, setRootItems] = useState<any>({
		mainItems: [],
	});
	useEffect(() => {
		return monitorForElements({
			onDrop({ source, location }) {
				const { data } = source;
				if (!location?.current?.dropTargets || data.canDrag === false) {
					return;
				}
				console.log(data, location.current.dropTargets[0]);
				const newId = generateRandomId();
				const newRootItems = {
					...rootItems,
				};
				if (
					location.current.dropTargets[0].data.name === "flexrow" ||
					location.current.dropTargets[0].data.name === "flexcol"
				) {
					newRootItems.mainItems = newRootItems.mainItems.map((item: any) => {
						if (location.current.dropTargets[0].data.id === item.id) {
							return {
								...item,
								nodes: [
									...item.nodes,
									{
										id: newId,
										name: data.name,
									},
								],
							};
						}
						return item;
					});
				} else {
					newRootItems.mainItems = [
						...rootItems.mainItems,
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
			<Content droppedItems={rootItems} />
		</>
	);
}

export default App;
