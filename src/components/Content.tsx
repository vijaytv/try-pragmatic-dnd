import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useRef, useEffect, useState } from "react";
import invariant from "tiny-invariant";
import { renderItems } from "../utils/renderItems";
import SideBar from "./SideBar";

const Content = ({
	droppedItems,
	handleSaveItem,
}: { droppedItems: any; handleSaveItem: any }) => {
	const ref = useRef(null);
	const [lastItemClicked, setLastItemClicked] = useState<any>(null);
	const handleClick = ({
		id,
		itemType,
		name,
	}: { id: string; itemType: string; name: string }) => {
		console.log(id, itemType);
		setLastItemClicked({ id, itemType, name });
	};
	useEffect(() => {
		const element = ref.current;
		invariant(element);
		return dropTargetForElements({
			element,
			getData: () => {
				return { id: "main", name: "main" };
			},
		});
	}, []);
	return (
		<main style={{ display: "flex", height: "calc(100vh - 80px)" }}>
			<SideBar lastItemClicked={lastItemClicked} updateItem={handleSaveItem} />
			<section
				ref={ref}
				style={{ width: "85%", padding: "10px", overflowY: "auto" }}
			>
				{droppedItems.length > 0 ? (
					renderItems(droppedItems, handleClick)
				) : (
					<p>
						This is the main content area where you can add your primary
						content.
					</p>
				)}
			</section>
		</main>
	);
};

export default Content;
