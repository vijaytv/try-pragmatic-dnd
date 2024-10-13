import { useState } from "react";

const Input = ({ id, name }: { id: string; name: string }) => {
	const [value, setValue] = useState("");
	return (
		<input
			type="text"
			style={{
				padding: "5px",
				border: "1px solid #ccc",
				borderRadius: "5px",
				width: "300px",
			}}
			name={name}
			placeholder="Enter text"
			onChange={(e) => setValue(e.target.value)}
			value={value}
			id={id}
		/>
	);
};

export default Input;
