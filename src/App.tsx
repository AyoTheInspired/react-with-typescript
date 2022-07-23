import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
	const personName = {
		first: "Bruce",
		last: "Wayne",
	};

	const nameList = [
		{ first: "Bruce", last: "Wayne" },
		{ first: "Clark", last: "Kent" },
		{ first: "Princess", last: "Diana" },
	];

	return (
		<div className="App">
			<Greet name="Ayod" messageCount={20} isLoggedIn={false} />
			<Person name={personName} />
			<PersonList names={nameList} />
			<Status status="loading" />
			<Heading>Some Text</Heading>
			<Button onClick={(event) => console.log("button clicked", event)} />
		</div>
	);
}

export default App;
