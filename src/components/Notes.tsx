import * as React from "react";
import { Note } from "../models/note.model";
import { Card, Button } from "react-bootstrap";

interface INotesProps {
	note: Note;
	handleDelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
	note,
	handleDelete,
}) => {
	return (
		<div className="mb-3">
			<Card style={{ backgroundColor: note.color }}>
				<Card.Body>
					<Card.Title>{note.title}</Card.Title>
					<Card.Title>{note.text}</Card.Title>
					<Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
					<Button
						className="mt-3"
						onClick={() => handleDelete(note.id)}
						variant="danger">
						Delete
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Notes;
