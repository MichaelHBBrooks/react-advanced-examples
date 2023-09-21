import { useCallback, useState } from "react";

export function useInputProps(initial: string) {
	const [value, setValue] = useState(initial);

	const handleChange = useCallback(
		(event: React.FormEvent<HTMLInputElement>) => setValue(event.currentTarget.value),
		[]
	);

	const inputProperties = {
		value: value,
		onChange: handleChange
	};

	return inputProperties;
}
