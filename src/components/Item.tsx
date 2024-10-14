import { useEffect, useRef, type ReactNode } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";
const Item = ({
	children,
	id,
	name,
	canDrag = true,
	onItemClicked,
}: {
	id: string;
	name: string;
	children: ReactNode;
	canDrag?: boolean;
	onItemClicked: any;
}) => {
	const ref = useRef(null);
	useEffect(() => {
		const element = ref.current;
		invariant(element);
		return draggable({
			element,
			getInitialData: () => ({ id, name, canDrag }),
			onDrop: () => {
				//console.log("Dropped!", id);
			},
		});
	}, []);
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			style={{
				border: "1px solid #ccc",
				marginBottom: "10px",
				backgroundColor: "#660033",
				color: "white",
				textAlign: "center",
				cursor: "move",
			}}
			ref={ref}
			onClick={onItemClicked}
		>
			{children}
		</div>
	);
};

export default Item;
