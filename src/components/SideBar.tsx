import EditProperties from "./EditProperties";
import Item from "./Item";

const SideBar = ({
	lastItemClicked,
	updateItem,
}: { lastItemClicked: any; updateItem: any }) => {
	return (
		<aside
			style={{
				width: "15%",
				padding: "10px",
				border: "1px solid #ccc",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<h2>Drag Items</h2>
			<ul style={{ listStyle: "none", padding: 0 }}>
				<li>
					<h3>Layouts</h3>
				</li>
				<li>
					<Item id="cssgrid" name="cssgrid">
						<div>CSS grid</div>
					</Item>
				</li>
				<li>
					<Item id="flexrow" name="flexrow">
						<div>Flex (row)</div>
					</Item>
				</li>
				<li>
					<Item id="flexcol" name="flexcol">
						<div>Flex (column)</div>
					</Item>
				</li>
				<li>
					<h3>Components</h3>
				</li>
				<li>
					<Item id="button" name="button">
						<div>Button</div>
					</Item>
				</li>
				<li>
					<Item id="input" name="input">
						<div>Input</div>
					</Item>
				</li>
				<li>
					<Item id="loremipsum" name="loremipsum">
						<div>Lorem Ipsum</div>
					</Item>
				</li>
			</ul>
			<h2>Properties</h2>
			{lastItemClicked?.itemType === "loremipsum" && (
				<EditProperties item={lastItemClicked} onSave={updateItem} />
			)}
		</aside>
	);
};

export default SideBar;
