import { useState } from "react";

const EditProperties = ({ item, onSave }: { item: any; onSave: any }) => {
	const [value, setValue] = useState("");
	const onClick = () => {
		onSave({ ...item, value });
	};
	return (
		<div>
			<p>Properties for {item.name}</p>
			<label htmlFor="loremipsum-text">
				Text:
				<textarea
					id="loremipsum-text"
					onChange={(e) => setValue(e.target.value)}
				>
					{value}
				</textarea>
				<button type="button" onClick={onClick}>
					Save
				</button>
			</label>
		</div>
	);
};

export default EditProperties;
