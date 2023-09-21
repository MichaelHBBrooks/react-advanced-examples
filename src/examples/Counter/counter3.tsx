import React from "react";
import { Description } from "../../components/Description";
import { Title } from "../../components/Title";

export function Counter3() {
	const [counter1, setCounter1] = React.useState<number>(0);
	const [counter2, setCounter2] = React.useState<number>(0);

	const increment1 = React.useCallback(
		(_event: React.MouseEvent) => {
			setTimeout(() => {
				console.log(`increment1's counter1 is: ${counter1}`);
				setCounter1(counter1 + 1);
			}, 3000);
		},
		[counter1]
	);

	const increment2 = React.useCallback((_event: React.MouseEvent) => {
		setTimeout(
			() =>
				setCounter2((nonStaleCounter) => {
					console.log(`increment2's counter2 is: ${nonStaleCounter}`);
					return nonStaleCounter + 1;
				}),
			3000
		);
	}, []);

	return (
		<div>
			<Title text="Counter with timeout" />
			<Description>
				<p>
					Incrementing the counter with a timeout is similar to performing an async function call to a REST
					API endpoint. After a delay it returns with a new value.
				</p>
				<p>
					Counter 1 has a problem with the value being stale when the timeout calls its function. If you were
					to click the button 3 times in during the delay, then it would call the increment function call 3
					times, but each time counter state would be the old stale value.
				</p>
				<p>
					Counter 2 resolves this problem by using an updater function. The argument passed into the updater
					function will be the latest value of the state. Clicking it multiple times in a second will trigger
					multiple timeouts, but each time it increments it will have the correct state.
				</p>
			</Description>
			<div>
				<div>Counter 1: {counter1}</div>
				<button onClick={increment1}>Increment Counter 1</button>
			</div>
			<div>
				<div>Counter 2: {counter2}</div>
				<button onClick={increment2}>Increment Counter 2</button>
			</div>
		</div>
	);
}

