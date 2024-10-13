import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useRef, useEffect } from "react";
import invariant from "tiny-invariant";
import Item from "../Item";
import { renderItems } from "../utils/renderItems";

const SideBar = () => {
	return (
		<aside
			style={{
				width: "15%",
				padding: "10px",
				border: "1px solid #ccc",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<h2>Components</h2>
			<ul style={{ listStyle: "none", padding: 0 }}>
				<li>
					<Item id="flexrow" name="flexrow">
						<div>flex row</div>
					</Item>
				</li>
				<li>
					<Item id="flexcol" name="flexcol">
						<div>flex col</div>
					</Item>
				</li>
				<li>
					<Item id="button" name="button">
						<div>button</div>
					</Item>
				</li>
				<li>
					<Item id="input" name="input">
						<div>input</div>
					</Item>
				</li>
				<li>
					<Item id="grid" name="grid">
						<div>grid</div>
					</Item>
				</li>
			</ul>
		</aside>
	);
};

const Content = ({ droppedItems }: { droppedItems: any }) => {
	const ref = useRef(null);

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
			<SideBar />
			<section
				ref={ref}
				style={{ width: "85%", padding: "10px", overflowY: "auto" }}
			>
				{droppedItems.mainItems.length > 0 ? (
					renderItems(droppedItems.mainItems)
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
