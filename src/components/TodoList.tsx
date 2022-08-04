import * as React from "react";
import { Todo } from "../todo.model";
import SingleTodo from "./SingleTodo";

interface ITodoListProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({
	todos,
	setTodos,
}) => {
	return (
		<div className="todos">
			{todos.map((todo) => (
				<SingleTodo
					todo={todo}
					key={todo.id}
					todos={todos}
					setTodos={setTodos}
				/>
			))}
		</div>
	);
};

export default TodoList;
