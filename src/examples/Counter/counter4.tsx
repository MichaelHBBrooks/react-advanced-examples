import React from "react";
import { Description } from "../../components/Description";
import { Title } from "../../components/Title";

export function Counter4() {
	const [counter, setCounter] = React.useState<number>(0);
	const [active, setActive] = React.useState<boolean>(true);

	const increment = React.useCallback((_event: React.MouseEvent) => {
		setActive(false);
		setTimeout(() => {
			setCounter((x) => x + 1);
			setActive((y) => !y);
		}, 3000);
	}, []);

	console.log("Rerun!");

	return (
		<div>
			<Title text="Counter with timeout and button disabling" />
			<div>
				<Description>
					<p>
						When a user clicks this button it will now become disabled until the counter has been
						incremented.
					</p>
					<p>
						There is a problem with this method however. In the current version of React this will trigger
						two re-renders, one for the counter and one for the active state.
					</p>
				</Description>
			</div>
			<div>
				<div>Counter: {counter}</div>
				<button disabled={!active} onClick={increment}>
					Increment Counter
				</button>
			</div>
		</div>
	);
}
