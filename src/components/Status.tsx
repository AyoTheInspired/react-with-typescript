import React from "react";

type StatusProps = {
	// This strictly specifies what possible values can be accepted
	status: "loading" | "success" | "error";
};

function Status(props: StatusProps) {
	let message;

	if (props.status === "loading") {
		message = "Loading";
	} else if (props.status === "success") {
		message = "Data Fetched successfully";
	} else if (props.status === "error") {
		message = "Error fetching data";
	}

	return (
		<div>
			Advanced props
			<h2>Status - {message}</h2>
		</div>
	);
}

export default Status;
