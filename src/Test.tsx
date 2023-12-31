import { useReducer } from "react";

const initialState = { count: 0 };

interface SomeState {
    count: number;
}

type ACTIONTYPE = { type: "increment"; payload: number } | { type: "decrement"; payload: string };

// function reducer(state: typeof initialState, action: ACTIONTYPE) {
function reducer(state: SomeState, action: ACTIONTYPE) {
	switch (action.type) {
		case "increment":
			return { count: state.count + action.payload };
		case "decrement":
			return { count: state.count - Number(action.payload) };
		default:
			throw new Error();
	}
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: "decrement", payload: "5" })}>-</button>
			<button onClick={() => dispatch({ type: "increment", payload: 5 })}>+</button>
		</>
	);
}
