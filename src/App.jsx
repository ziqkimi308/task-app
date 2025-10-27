import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
	// Retrieve the localStorage
	const [tasklist, setTasklist] = useState(
		JSON.parse(localStorage.getItem("tasklist")) || []
	);

	// Update the localStorage
	useEffect(() => {
		localStorage.setItem("tasklist", JSON.stringify(tasklist));
	}, [tasklist]);

	return (
		<>
			<Header />

			<AddTask tasklist={tasklist} setTasklist={setTasklist} />

			<ShowTask tasklist={tasklist} setTasklist={setTasklist} />
		</>
	);
}

export default App;
