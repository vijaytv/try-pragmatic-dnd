import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useEffect, useRef } from "react";
import invariant from "tiny-invariant";
import Item from "../Item";

const FlexRow = ({
	id,
	name,
	nodes = [],
}: { id: string; name: string; nodes: any }) => {
	const ref = useRef(null);
	useEffect(() => {
		const element = ref.current;
		invariant(element);
		return dropTargetForElements({
			element,
			getData: () => {
				return { id, name };
			},
		});
	}, []);
	return (
		<div
			ref={ref}
			style={{
				display: "flex",
				height: "100px",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "flex-start",
				gap: "10px",
				alignItems: "center",
				padding: "10px",
				border: "1px solid #ccc",
				marginBottom: "10px",
				backgroundColor: "slategrey",
				color: "white",
				textAlign: "center",
			}}
		>
			{nodes.length === 0 ? (
				<div>Flex Row Items can be dropped here</div>
			) : (
				nodes.map((node: any) => {
					return (
						<Item key={node.id} id={node.id} name={node.name} canDrag={false}>
							{node.name}
						</Item>
					);
				})
			)}
		</div>
	);
};

const FlexCol = ({
	id,
	name,
	nodes = [],
}: { id: string; name: string; nodes: any }) => {
	const ref = useRef(null);
	useEffect(() => {
		const element = ref.current;
		invariant(element);
		return dropTargetForElements({
			element,
			getData: () => {
				return { id, name };
			},
		});
	}, []);
	return (
		<div
			ref={ref}
			style={{
				display: "flex",
				minHeight: "100px",
				flexDirection: "column",
				flexWrap: "wrap",
				gap: "10px",
				justifyContent: "flex-start",
				alignItems: "center",
				padding: "10px",
				border: "1px solid #ccc",
				marginBottom: "10px",
				backgroundColor: "slategrey",
				color: "white",
				textAlign: "center",
			}}
		>
			{nodes.length === 0 ? (
				<div>Flex Column Items can be dropped here</div>
			) : (
				nodes.map((node: any) => {
					return (
						<Item key={node.id} id={node.id} name={node.name} canDrag={false}>
							{node.name}
						</Item>
					);
				})
			)}
		</div>
	);
};

export { FlexRow, FlexCol };
