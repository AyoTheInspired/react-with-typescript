import React from "react";

type ButtonProps = {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
	return <button onClick={props.onClick}>Click</button>;
};

export default Button;
