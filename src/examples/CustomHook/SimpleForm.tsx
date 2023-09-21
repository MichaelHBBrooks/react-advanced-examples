import React, { useCallback, useState } from "react";
import { Title } from "../../components/Title";
import { Description } from "../../components/Description";

export function SimpleForm() {
	const [firstName, setFirstName] = useState("John");
	const [lastName, setLastName] = useState("Smith");

	const handleFirstNameChange = useCallback((event: React.FormEvent<HTMLInputElement>): void => {
		setFirstName(event.currentTarget.value);
	}, []);

	const handleLastNameChange = useCallback((event: React.FormEvent<HTMLInputElement>): void => {
		setLastName(event.currentTarget.value);
	}, []);

	return (
		<div>
			<Title text="Simple Form Input" />
			<Description>
				<p>
					This is a simple form that has two inputs: first name and last name. They use{" "}
					<code>useCallback</code> for efficiency. Notice that the inputs have their own handlers for storing
					the data.
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
