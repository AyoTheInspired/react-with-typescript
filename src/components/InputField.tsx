import React from "react";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
	return (
		<form className="input" onSubmit={handleAdd}>
			<input
				type="text"
				placeholder="Enter a task"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				className="input__box"
			/>

			<button className="input__submit" type="submit">
				Go
			</button>
		</form>
	);
};

export default InputField;
