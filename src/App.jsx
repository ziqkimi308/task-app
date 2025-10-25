import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
	return (
		<>
			<Header />

			<AddTask />

			<ShowTask />
		</>
	);
}

export default App;
