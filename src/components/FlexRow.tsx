import { renderItems } from "../utils/renderItems";
import useDroppable from "../hooks/useDroppable";
import { flexBaseStyles } from "../styles/styles";

const FlexRow = ({
	id,
	name,
	nodes = [],
}: { id: string; name: string; nodes: any }) => {
	const { ref } = useDroppable(id, name);
	return (
		<div ref={ref} style={flexBaseStyles}>
			{nodes.length === 0 ? (
				<div>Flex Row Items can be dropped here</div>
			) : (
				renderItems(nodes)
			)}
		</div>
	);
};

const FlexCol = ({
	id,
	name,
	nodes = [],
}: { id: string; name: string; nodes: any }) => {
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
				renderItems(nodes)
			)}
		</div>
	);
};

export { FlexRow, FlexCol };
