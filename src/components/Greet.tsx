import React from "react";

type GreetProps = {
	name: string;
	messageCount: number;
	isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
	return (
		<div>
			Basic Props
			<h2>
				{props.isLoggedIn
					? `				Welcome ${props.name}, You have ${props.messageCount} messages`
					: "Welcome, Guest"}
			</h2>
		</div>
	);
}

export default Greet;
