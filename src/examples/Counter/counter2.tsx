import React from "react";
import { Title } from "../../components/Title";
import { Description } from "../../components/Description";

export function Counter2() {
	const [counter1, setCounter1] = React.useState<number>(0);
	const [counter2, setCounter2] = React.useState<number>(0);

	const increment1 = React.useCallback(
		(_event: React.MouseEvent) => {
			setCounter1(counter1 + 1);
		},
		[counter1]
	);

	const increment2 = React.useCallback((_event: React.MouseEvent) => {
		setCounter2((counter) => counter + 1);
	}, []);

	console.log("Checking if functions were redefined...");
	const oldFunction1 = React.useRef<((_event: React.MouseEvent) => void) | undefined>(increment1);
	console.log(`  Was the increment1 function redefined? ${oldFunction1.current === increment1 ? "no" : "yes"}`);
	oldFunction1.current = increment1;

	const oldFunction2 = React.useRef<((_event: React.MouseEvent) => void) | undefined>(increment2);
	console.log(`  Was the increment2 function redefined? ${oldFunction2.current === increment2 ? "no" : "yes"}`);
	oldFunction2.current = increment2;

	return (
		<div>
			<Title text="Counter with useCallback" />
			<Description>
				<p>
					Both buttons are now executing functions surrounded by React's{" "}
					<a href="https://react.dev/reference/react/useCallback">useCallback</a> function.
				</p>
				<p>
					The first button uses the setter function in the typical manner. In this case it's
					setCounter1(counter1 + 1). Since counter1 is being modified, the useCallback function's dependencies
					argument must contain it.
				</p>
				<p>
					The second button also uses useCallback, but it passes in an anonymous arrow function as the
					argument to the setCounter2 function. By doing so, it will always use an up to date value of the
					counter2 state. This also allows it to omit the counter2 state from the useCallback's dependencies
					array.
				</p>
				<p>
					The difference is that when the component has an update to a state or property, the increment1
					function has to be redefined when it sees anything in its dependencies list is updated. While
					increment2 won't need to redefine the function.
				</p>
				<p>
					This is shown by the ref variables that temporarily hold the old value of those two functions. Since
					increment1 is being redefined, it will show in the console log as being altered. Whenever increment2
					is called, the dependency list is empty and React is smart enough to recognize the function doesn't
					need to be set again. This is a miniscule change at the small scale, but it improves speed greatly
					the more components there are on the screen or the more often the component needs to be updated.
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
