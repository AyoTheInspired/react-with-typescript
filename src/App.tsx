import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Note } from "./models/note.model";
import { Container, Row, Col } from "react-bootstrap";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import InputField from "./components/InputField";
import { Todo } from "./todo.model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();

		if (todo) {
			setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
			setTodo("");
		}
	};

	// console.log(todos);

	const [notes, setNotes] = useState<Note[]>([
		{
			id: new Date().toString(),
			title: "Meetings",
			text: "Schedule meeting with UI/UX Team",
			color: "#dfdfdf",
			date: new Date().toString(),
		},
	]);

	return (
		<div className="App">
			<span className="heading">Taskify</span>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
