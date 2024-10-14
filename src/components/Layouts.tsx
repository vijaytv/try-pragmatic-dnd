import { renderItems } from "../utils/renderItems";
import useDroppable from "../hooks/useDroppable";
import { flexBaseStyles } from "../styles/styles";

const FlexRow = ({
	id,
	name,
	nodes = [],
	onItemClicked,
}: { id: string; name: string; nodes: any; onItemClicked: any }) => {
	const { ref } = useDroppable(id, name);
	return (
		<div ref={ref} style={flexBaseStyles}>
			{nodes.length === 0 ? (
				<div>Flex Row Items can be dropped here</div>
			) : (
				renderItems(nodes, onItemClicked)
			)}
		</div>
	);
};

const FlexCol = ({
	id,
	name,
	nodes = [],
	onItemClicked,
}: { id: string; name: string; nodes: any; onItemClicked: any }) => {
	const { ref } = useDroppable(id, name);
	return (
		<div
			ref={ref}
			style={{
				...flexBaseStyles,
				flexDirection: "column",
			}}
		>
			{nodes.length === 0 ? (
				<div>Flex Column Items can be dropped here</div>
			) : (
				renderItems(nodes, onItemClicked)
			)}
		</div>
	);
};

const CSSGridLayout = ({
	id,
	name,
	nodes = [],
	onItemClicked,
}: { id: string; name: string; nodes: any; onItemClicked: any }) => {
	const { ref } = useDroppable(id, name);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			ref={ref}
			onClick={onItemClicked}
			style={{
				display: "grid",
				minHeight: "300px",
				gridTemplateColumns: "repeat(3, 1fr)",
				gap: "10px",
				padding: "10px",
				border: "1px solid #ccc",
				backgroundColor: "#464c51",
				color: "white",
			}}
		>
			{nodes.length === 0 ? (
				<div>Grid Column Items can be dropped here</div>
			) : (
				renderItems(nodes, onItemClicked)
			)}
		</div>
	);
};

export { FlexRow, FlexCol, CSSGridLayout };
