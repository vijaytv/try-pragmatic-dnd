import Button from "../components/Button";
import { FlexCol, FlexRow } from "../components/FlexRow";
import Input from "../components/Input";
import Item from "../Item";

const renderItems = (items: any) => {
	return items.map((item: any) => {
		switch (item.name) {
			case "flexrow":
				return (
					<FlexRow
						key={item.id}
						id={item.id}
						nodes={item.nodes}
						name={item.name}
					/>
				);
			case "flexcol":
				return (
					<FlexCol
						key={item.id}
						id={item.id}
						nodes={item.nodes}
						name={item.name}
					/>
				);
			case "button":
				return (
					<Button
						key={item.id}
						id={item.id}
						onClick={(): void => {
							console.log("clicked");
						}}
					>
						{item.name}
					</Button>
				);
			case "input":
				return <Input key={item.id} id={item.id} name={item.name} />;
			default:
				return (
					<Item key={item.id} id={item.id} name={item.name} canDrag={false}>
						{item.name}
					</Item>
				);
		}
	});
};

export { renderItems };
