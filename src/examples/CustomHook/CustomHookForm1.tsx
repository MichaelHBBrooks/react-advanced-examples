// https://react.dev/learn/reusing-logic-with-custom-hooks
import { Title } from "../../components/Title";
import { Description } from "../../components/Description";
import { useInputState } from "../../hooks/useInputState";

export function CustomHookForm1() {
	const [firstName, handleFirstNameChange] = useInputState("Jane");
	const [lastName, handleLastNameChange] = useInputState("Smith");

	return (
		<div>
			<Title text="Form with Custom Hooks" />
			<Description>
				<p>This is a simple form that has two inputs: first name and last name.</p>
				<p>
					React has several hooks built in as building blocks for interacting with its shadow DOM, such as{" "}
					<code>useState</code> or <code>useRef</code>. Sometimes there is a need to use some logic over and
					over again in different places.
				</p>
				<p>
					Rather than these inputs using the standard React hook, <code>useState</code>, they make use of a
					custom hook. This custom hook creates a handler for inputs without the need to repeatedly create a
					function for each one individually. It can be imported into any file to make use of it.
				</p>
				<p>
					Refer to{" "}
					<a href="https://react.dev/learn/reusing-logic-with-custom-hooks">
						React's Reusing Logic with Custom Hooks
					</a>{" "}
					article to see how it can make useful, reusable hooks.
				</p>
			</Description>
			<form>
				<label htmlFor="firstName">First Name</label>
				<input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
				<label htmlFor="lastName">Last Name</label>
				<input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
			</form>
		</div>
	);
}
