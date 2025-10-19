import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
	return (
		<>
			<h1>Hello</h1>
			<Header />
			<ShowTask />
			<AddTask />
		</>
	);
}

export default App;
