import React from "react";
import { Title } from "../../components/Title";
import { Description } from "../../components/Description";

export function Counter1() {
	const [counter, setCounter] = React.useState<number>(0);
	const increment = () => setCounter(counter + 1);

	console.log("Counter1 component has been recompiled.");
	return (
		<div>
			<Title text="Simplest Example" />
			<Description>
				<p>
					This gets the job done. Clicking the button will call on the setCounter function to let React know
					an update has occurred to the counter and to perform a redraw.
				</p>
				<p>
					There is a flaw with this simple example. Every time a state or property changes, the component will
					be called again. Anything that is not in a hook will be re-evaluated and re-executed. In this case
					the console.log function will print out "Counter1 component has been recompiled." and the increment
					function is redefined.
				</p>
				<p>
					There can be hundreds of components that have their properties updated. Or one component that is
					updated hundreds of time a second, such as a drag and drop component that is moved around with the
					user's cursor. This inefficiency can add up when a state or property change occurs.
				</p>
			</Description>
			<div>
				<div>Counter: {counter}</div>
				<button onClick={increment}>Increment Counter</button>
			</div>
		</div>
	);
}
