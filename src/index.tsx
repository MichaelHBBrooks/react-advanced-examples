import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import ExampleBox from "./components/ExampleBox";
import {
	Counter1,
	Counter2,
	Counter3,
	Counter4,
	Counter5,
	CustomHookForm1,
	CustomHookForm2,
	SimpleForm
} from "./examples";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<div className="main">
		{/* <React.StrictMode> */}
		<span className="sectionHeader">Efficiency Examples with Counters</span>
		<ExampleBox>
			<Counter1 />
		</ExampleBox>
		<ExampleBox>
			<Counter2 />
		</ExampleBox>
		<ExampleBox>
			<Counter3 />
		</ExampleBox>
		<ExampleBox>
			<Counter4 />
		</ExampleBox>
		<ExampleBox>
			<Counter5 />
		</ExampleBox>
		<span className="sectionHeader">Custom Hooks Examples</span>
		<ExampleBox>
			<SimpleForm />
		</ExampleBox>
		<ExampleBox>
			<CustomHookForm1 />
		</ExampleBox>
		<ExampleBox>
			<CustomHookForm2 />
		</ExampleBox>
		{/* </React.StrictMode> */}
	</div>
);
