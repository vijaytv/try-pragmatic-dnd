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
				padding: "5px",
				border: "none",
				borderRadius: "5px",
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
