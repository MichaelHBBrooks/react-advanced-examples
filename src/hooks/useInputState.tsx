import { useCallback, useState } from "react";

export function useInputState(initialValue: string): [string, (event: React.FormEvent<HTMLInputElement>) => void] {
	const [field, setField] = useState(initialValue);

	const handleChange = useCallback(
		(event: React.FormEvent<HTMLInputElement>) => setField(event.currentTarget.value),
		[]
	);

	return [field, handleChange];
}
