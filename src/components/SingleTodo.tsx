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
	const [edit, setEdit] = React.useState<boolean>(false);
	const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

	const handleDone = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();

		setTodos(
			todos.map((todo) =>
				todo.id === id
					? {
							...todo,
							todo: editTodo,
					  }
					: todo
			)
		);

		setEdit(false);
	};

	return (
		<form
			onSubmit={(e) => handleEdit(e, todo.id)}
			style={{
				display: "flex",
				margin: "20px auto",
				border: "1px solid green",
				padding: "20px",
			}}>
			{edit ? (
				<input
					value={editTodo}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setEditTodo(e.target.value)
					}
				/>
			) : todo.isDone ? (
				<s
					className="todos__single--text"
					style={{ marginRight: "25px", color: "red" }}>
					{todo.todo}
				</s>
			) : (
				<span className="todos__single--text" style={{ marginRight: "25px" }}>
					{todo.todo}
				</span>
			)}

			<div>
				<span className="icon">
					<AiFillEdit
						onClick={() => {
							if (!edit && !todo.isDone) {
								setEdit(!edit);
							}
						}}
					/>
				</span>
				<span className="icon">
					<AiFillDelete />
				</span>
				<span className="icon" onClick={() => handleDone(todo.id)}>
					<MdDone />
				</span>
			</div>
		</form>
	);
}
