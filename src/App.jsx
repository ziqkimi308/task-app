import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
	const [tasklist, setTasklist] = useState([]);

	return (
		<>
			<Header />

			<AddTask tasklist={tasklist} setTasklist={setTasklist} />

			<ShowTask tasklist={tasklist} setTasklist={setTasklist} />
		</>
	);
}

export default App;
