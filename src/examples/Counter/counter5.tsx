import React from "react";
import { Description } from "../../components/Description";
import { Title } from "../../components/Title";

interface CounterState {
	active: boolean;
	counter: number;
}

//It may be more efficient to use an enum for the type instead, but this example uses strings to keep it simple.
type CounterAction = { type: "increment" } | { type: "disable" };

/**
 * React's devs insist on using switch statements and that the action argument should be an object with "type" defined
 * as one of its properties. They state that this is done out of convention.
 * @see https://react.dev/reference/react/useReducer#writing-the-reducer-function
 */
function counterReducer(state: CounterState, action: CounterAction) {
	switch (action.type) {
		case "increment":
			return { counter: state.counter + 1, active: true };
		case "disable":
			return { ...state, active: false };
		default:
			throw new Error(`Unknown action encountered`);
	}
}

export function Counter5() {
	const [state, dispatch] = React.useReducer(counterReducer, { counter: 0, active: true });

	const increment = React.useCallback((_event: React.MouseEvent) => {
		dispatch({ type: "disable" });
		setTimeout(() => {
			dispatch({ type: "increment" });
		}, 3000);
	}, []);

	return (
		<div>
			<Title text="Counter with timeout, disabling, and useReducer for efficiency!" />
			<div>
				<Description>
					<p>
						When the Increment Counter button is pressed, the button will be disabled. When the increment
						function is called both the counter and active values will be updated in React simultaneously
						with the useReducer.
					</p>
				</Description>
			</div>
			<div>
				<div>Counter: {state.counter}</div>
				<button disabled={!state.active} onClick={increment}>
					Increment Counter
				</button>
			</div>
		</div>
	);
}
