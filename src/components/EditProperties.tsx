import { useState } from "react";

const EditProperties = ({ item, onSave }: { item: any; onSave: any }) => {
	const [value, setValue] = useState("");
	const [name, setName] = useState(item.name);
	const onClick = () => {
		onSave({ ...item, value, name });
	};
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<p>Properties for {item.name}</p>
			Name:
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			Text:
			<textarea
				id="loremipsum-text"
				onChange={(e) => setValue(e.target.value)}
				value={value}
			/>
			<br />
			<button type="button" onClick={onClick}>
				Save
			</button>
		</div>
	);
};

export default EditProperties;
