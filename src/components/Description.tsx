/**
 * For common types found React, refer to the react-typescript-cheatsheet.
 * @see https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/#useful-react-prop-type-examples
 */
interface DescriptionProps {
	children: React.ReactNode;
}

/**
 * Just a very simple functional component that surrounds the description block with a div tag. It uses the
 * "description" class name so a consistent style can be applied to each entry.
 *
 * The first arguement in this function is destructured so we know we only care about the "children" property. The
 * "children" property is a reserved keyword in React components.
 * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
 */
export function Description({ children }: DescriptionProps) {
	return <div className="description">{children}</div>;
}
