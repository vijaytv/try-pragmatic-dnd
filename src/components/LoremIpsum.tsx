const LoremIpsum = ({
	id,
	name,
	onItemClicked,
}: { id: string; name: string; onItemClicked: any }) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			id={id}
			onClick={() => {
				onItemClicked({ id, itemType: "loremipsum", name });
			}}
			style={{
				maxWidth: "600px",
				height: "100px",
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "flex-start",
				fontSize: "14px",
				color: "white",
				backgroundColor: "#333",
				padding: "5px",
				marginBottom: "5px",
			}}
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua.
		</div>
	);
};

export default LoremIpsum;
