// https://react.dev/learn/reusing-logic-with-custom-hooks
import { Title } from "../../components/Title";
import { Description } from "../../components/Description";
import { useInputProps } from "../../hooks/";

export function CustomHookForm2() {
	const firstNameProps = useInputProps("James");
	const lastNameProps = useInputProps("Smith");

	return (
		<div>
			<Title text="Form with Custom Hooks (alternate method)" />
			<Description>
				<p>This is a simple form that has two inputs: first name and last name.</p>
				<p>
					Custom hooks can be made to suit the needs of the developer. This example directly outputs the
					properties to be used with an HTML <code>input</code> element. This may not be the most optimal
					pattern to use since it won't work with elements that aren't specifically <code>input</code>{" "}
					elements, but it conveys the idea that a custom hook can take multiple forms.
				</p>
			</Description>
			<form>
				<label htmlFor="firstName">First Name</label>
				<input type="text" id="firstName" {...firstNameProps} />
				<label htmlFor="lastName">Last Name</label>
				<input type="text" id="lastName" {...lastNameProps} />
			</form>
		</div>
	);
}
