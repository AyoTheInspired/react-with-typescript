import * as React from "react";
import { Todo } from "../todo.model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface ISingleTodoProps {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function SingleTodo({
	todo,
	todos,
	setTodos,
}: ISingleTodoProps) {
	return (
		<form
			style={{
				display: "flex",
				margin: "20px auto",
				border: "1px solid green",
				padding: "20px",
			}}>
			<span className="todos__single--text" style={{ marginRight: "25px" }}>
				{todo.todo}
			</span>
			<div>
				<span className="icon">
					<AiFillEdit />
				</span>
				<span className="icon">
					<AiFillDelete />
				</span>
				<span className="icon">
					<MdDone />
				</span>
			</div>
		</form>
	);
}
