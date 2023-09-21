interface TitleProps {
	text: string;
}

export function Title({ text }: TitleProps) {
	return <div className="title">{text}</div>;
}
