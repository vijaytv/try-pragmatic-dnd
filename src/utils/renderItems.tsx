import Button from "../components/Button";
import { CSSGridLayout, FlexCol, FlexRow } from "../components/Layouts";
import Input from "../components/Input";
import Item from "../components/Item";
import LoremIpsum from "../components/LoremIpsum";

const renderItems = (items: any, onItemClicked: any) => {
	return items.map((item: any) => {
		switch (item.name) {
			case "flexrow":
				return (
					<FlexRow
						key={item.id}
						id={item.id}
						nodes={item.nodes}
						name={item.name}
						onItemClicked={onItemClicked}
					/>
				);
			case "flexcol":
				return (
					<FlexCol
						key={item.id}
						id={item.id}
						nodes={item.nodes}
						name={item.name}
						onItemClicked={onItemClicked}
					/>
				);
			case "cssgrid":
				return (
					<CSSGridLayout
						key={item.id}
						id={item.id}
						nodes={item.nodes}
						name={item.name}
						onItemClicked={onItemClicked}
					/>
				);
			case "button":
				return (
					<Button key={item.id} id={item.id} onItemClicked={onItemClicked}>
						{item.name}
					</Button>
				);
			case "input":
				return <Input key={item.id} id={item.id} name={item.name} />;
			case "loremipsum":
				return (
					<LoremIpsum
						key={item.id}
						id={item.id}
						name={item.name}
						onItemClicked={onItemClicked}
					/>
				);
			default:
				return (
					<Item
						key={item.id}
						id={item.id}
						name={item.name}
						canDrag={false}
						onItemClicked={onItemClicked}
					>
						{item.name}
					</Item>
				);
		}
	});
};

export { renderItems };
