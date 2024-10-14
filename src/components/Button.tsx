import type { ReactNode } from "react";

const Button = ({
	children,
	onItemClicked,
	id,
}: {
	children: ReactNode;
	id: string;
	onItemClicked: any;
}) => {
	return (
		<button
			type="button"
			style={{
				backgroundColor: "#04AA6D",
				color: "white",
				padding: "5px",
				border: "soliid 2px black",
				borderRadius: "10px",
				cursor: "pointer",
				margin: "5px",
			}}
			id={id}
			onClick={onItemClicked}
		>
			{children}
		</button>
	);
};

export default Button;
