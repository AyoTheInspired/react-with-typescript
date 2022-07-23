import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Note } from "./models/note.model";
import { Container, Row, Col } from "react-bootstrap";
import NotesList from "./components/NotesList";

function App() {
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
			<>
				<Header />
				<Container className="mt-5">
					<Row>
						<Col>
							<NotesList setNotes={setNotes} notes={notes} />
						</Col>
					</Row>
				</Container>
			</>
		</div>
	);
}

export default App;
