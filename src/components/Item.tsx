import { useEffect, useRef, type ReactNode } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";
const Item = ({
	children,
	id,
	name,
	canDrag = true,
}: { id: string; name: string; children: ReactNode; canDrag: boolean }) => {
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
		<div
			style={{
				border: "1px solid #ccc",
				marginBottom: "10px",
				backgroundColor: "slategrey",
				color: "white",
				textAlign: "center",
			}}
			ref={ref}
		>
			{children}
		</div>
	);
};

export default Item;
