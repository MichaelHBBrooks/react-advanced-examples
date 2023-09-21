import React from "react";

interface ExampleBoxProps {
	children: React.ReactNode;
}

export default function ExampleBox(props: ExampleBoxProps) {
	const [active, setActive] = React.useState<boolean>(false);

	const toggleActive = React.useCallback(() => setActive(!active), [active]);

	return (
		<div className="exampleBox">
			<div className="header" onClick={toggleActive}>{active ? "Hide" : "Show"}</div>
			{active ? (
				<span className="content">
					{props.children}
				</span>
			) : (
				""
			)}
		</div>
	);
}
