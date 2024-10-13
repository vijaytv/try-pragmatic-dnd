import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useRef, useEffect } from "react";
import invariant from "tiny-invariant";

const useDroppable = (id: string, name: string) => {
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
	return { ref };
};

export default useDroppable;
