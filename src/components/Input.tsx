import { useState } from "react";

const Input = ({
	id,
	name,
	onItemClicked,
}: { id: string; name: string; onItemClicked: any }) => {
	const [value, setValue] = useState("");
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div onClick={onItemClicked}>
			<input
				type="text"
				style={{
					padding: "5px",
					border: "1px solid #ccc",
					borderRadius: "5px",
					maxWidth: "600px",
				}}
				name={name}
				placeholder="Enter text"
				onChange={(e) => setValue(e.target.value)}
				value={value}
				id={id}
			/>
		</div>
	);
};

export default Input;
