const LoremIpsum = ({
	id,
	name,
	value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec ultricies tincidunt, nunc nisl aliquet nunc",
	onItemClicked,
}: { id: string; name: string; onItemClicked: any; value?: string }) => {
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
			{value}
		</div>
	);
};

export default LoremIpsum;
