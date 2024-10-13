const Button = ({
	children,
	onClick,
	id,
}: {
	children: ReactNode;
	id: string;
	onClick: () => void;
}) => {
	return (
		<button
			style={{
				backgroundColor: "#008CBA",
				color: "white",
				padding: "10px",
				border: "soliid 2px black",
				borderRadius: "10px",
				cursor: "pointer",
			}}
			id={id}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
